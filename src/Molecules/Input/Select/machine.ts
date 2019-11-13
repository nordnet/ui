import { Machine, send, assign } from 'xstate';
import { SYMBOL_ALL } from './lib/constants';
import { Action } from './Select.types';

export const ACTION_TYPES = {
  SYNC: 'SYNC',
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
  TOGGLE: 'TOGGLE',
  FOCUS: 'FOCUS',
  BLUR: 'BLUR',
  SELECT_FOCUSED_ITEM: 'SELECT_FOCUSED_ITEM',
  SELECT_ITEM: 'SELECT_ITEM',
  DESELECT_ITEM: 'DESELECT_ITEM',
  CHANGE_COMMIT: 'CHANGE_COMMIT',
  CHANGE_COMMIT_ABORT: 'CHANGE_COMMIT_ABORT',
  ITEM_CLICK: 'ITEM_CLICK',
  SEARCH_QUERY_UPDATE: 'SEARCH_QUERY_UPDATE',
  MOUSE_MOVE: 'MOUSE_MOVE',
  KEY_PRESS: 'KEY_PRESS',
  FOCUS_NEXT_ITEM: 'FOCUS_NEXT_ITEM',
  FOCUS_PREV_ITEM: 'FOCUS_PREV_ITEM',
};

export type OptionLike = {
  [k: string]: any;
  value: any;
  label: string;
};
const isEqualOptions = (a: OptionLike, b: OptionLike) => a === b || a.value === b.value;
const includesOption = (arr: OptionLike[], option: OptionLike) =>
  typeof option !== 'undefined' &&
  (arr.includes(option) || arr.some(x => x.value === option.value));

export type Context = {
  error: string;
  success: boolean;
  options: Array<any>;
  selectedItems: Array<any>;
  disabled: boolean;
  open: boolean;
  placeholder: string;
  itemFocusIdx: number | null;
  searchQuery: string;
  extraInfo: string;
  multiselect: boolean;
  label: string;
  lastNavigationType: null | string;
  showSearch: boolean;
  visibleOptions: Array<any>;
  id: string;
  valueFromProps: Array<any>;
  uncommitedSelectedItems: Array<any>;
  actions: Array<Action>;
};

export const SelectMachine = Machine<Context>(
  {
    id: 'inputSelect',
    type: 'parallel',
    context: {
      error: '',
      success: false,
      options: [] as Array<any>,
      selectedItems: [] as Array<any>,
      disabled: false,
      actions: [],
      open: true,
      itemFocusIdx: null,
      searchQuery: '',
      extraInfo: '',
      multiselect: false,
      label: '',
      lastNavigationType: null,
      placeholder: '',
      showSearch: false,
      visibleOptions: [] as Array<any>,
      id: 'id-from-props',
      valueFromProps: [] as Array<any>,
      uncommitedSelectedItems: [] as Array<any>,
    },
    on: {
      [ACTION_TYPES.SYNC]: {
        actions: 'syncProps',
        target: 'selection.unknown',
      },
    },
    states: {
      open: {
        initial: 'unknown',
        on: {
          [ACTION_TYPES.OPEN]: {
            target: '.on',
            actions: 'restoreFocusOrFocusFirst',
            cond: ctx => ctx.actions.length > 0 || ctx.visibleOptions.length > 0,
          },
          [ACTION_TYPES.CLOSE]: { target: '.off', actions: 'cleanSearch' },
          [ACTION_TYPES.TOGGLE]: [
            { actions: send(ACTION_TYPES.CLOSE), cond: ctx => ctx.open },
            { actions: send(ACTION_TYPES.OPEN) },
          ],
          [ACTION_TYPES.BLUR]: {
            actions: send(ACTION_TYPES.CLOSE),
          },
          [ACTION_TYPES.SELECT_ITEM]: {
            actions: send(ACTION_TYPES.CLOSE),
            cond: (ctx, e) => e.payload && !e.payload.disabled && !ctx.multiselect,
          },
          [ACTION_TYPES.DESELECT_ITEM]: {
            actions: send(ACTION_TYPES.CLOSE),
            cond: (ctx, e) => e.payload && !e.payload.disabled && !ctx.multiselect,
          },
        },
        states: {
          unknown: {
            on: {
              '': [
                {
                  target: 'on',
                  cond: ctx => ctx.open,
                },
                {
                  target: 'off',
                },
              ],
            },
          },
          on: {
            onEntry: assign({ open: true }),
          },
          off: {
            onEntry: assign({ open: false }),
          },
        },
      },
      selection: {
        initial: 'unknown',
        states: {
          unknown: {
            on: {
              '': [
                {
                  target: 'controlled',
                  actions: 'forceValueFromProps',
                  cond: ctx => !!ctx.valueFromProps,
                },
                { target: 'uncontrolled' },
              ],
            },
          },
          controlled: {
            initial: 'unknown',
            on: {
              [ACTION_TYPES.SELECT_ITEM]: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: (_, e) => e.payload && !e.payload.disabled,
              },
              [ACTION_TYPES.SELECT_FOCUSED_ITEM]: {
                target: '.unknown',
                actions: 'sendSelectOrDeselectVisibleFocusedOption',
              },
              [ACTION_TYPES.DESELECT_ITEM]: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: ctx => !!ctx.multiselect,
              },
            },
            states: {
              unknown: {
                on: {
                  '': [
                    {
                      target: 'incorrectSelection',
                      cond: ctx => ctx.selectedItems.some(x => !includesOption(ctx.options, x)),
                    },
                    {
                      target: 'on',
                      cond: ctx => ctx.valueFromProps.length > 0,
                    },
                    { target: 'off' },
                  ],
                },
              },
              on: {},
              off: {},
              changeUncommitted: {
                on: {
                  [ACTION_TYPES.CHANGE_COMMIT]: {
                    target: 'unknown',
                    actions: 'commitSelectedItems',
                  },
                  [ACTION_TYPES.CHANGE_COMMIT_ABORT]: {
                    target: 'unknown',
                    actions: 'uncommitSelectedItems',
                  },
                },
              },
              incorrectSelection: {
                on: {
                  '': {
                    target: 'off',
                    actions: 'resetSelection',
                  },
                },
              },
            },
          },
          uncontrolled: {
            initial: 'unknown',
            on: {
              [ACTION_TYPES.SELECT_ITEM]: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: (_, e) => e.payload && !e.payload.disabled,
              },
              [ACTION_TYPES.SELECT_FOCUSED_ITEM]: {
                target: '.unknown',
                actions: 'sendSelectOrDeselectVisibleFocusedOption',
              },
              [ACTION_TYPES.DESELECT_ITEM]: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: ctx => !!ctx.multiselect,
              },
            },
            states: {
              unknown: {
                on: {
                  '': [
                    {
                      target: 'incorrectSelection',
                      cond: ctx => ctx.selectedItems.some(x => !includesOption(ctx.options, x)),
                    },
                    { target: 'on', cond: ctx => ctx.selectedItems.length > 0 },
                    { target: 'off' },
                  ],
                },
              },
              on: {},
              off: {},
              changeUncommitted: {
                on: {
                  [ACTION_TYPES.CHANGE_COMMIT]: {
                    target: 'unknown',
                    actions: 'commitSelectedItems',
                  },
                  [ACTION_TYPES.CHANGE_COMMIT_ABORT]: {
                    target: 'unknown',
                    actions: 'uncommitSelectedItems',
                  },
                },
              },
              incorrectSelection: {
                on: {
                  '': {
                    target: 'off',
                    actions: 'resetSelection',
                  },
                },
              },
            },
          },
        },
      },
      correctness: {
        initial: 'unknown',

        states: {
          unknown: {
            on: {
              '': [
                { target: 'error', cond: ctx => ctx.error !== '' },
                { target: 'success', cond: ctx => ctx.success },
                { target: 'neutral' },
              ],
            },
          },
          error: {},
          success: {},
          neutral: {},
        },
      },
      interaction: {
        initial: 'unknown',

        states: {
          unknown: {
            on: {
              '': [
                { target: 'disabled', cond: ctx => ctx.disabled },
                {
                  target: 'disabled',
                  cond: ctx => ctx.options.length === 0 && ctx.actions.length === 0,
                },
                { target: 'enabled' },
              ],
            },
          },
          disabled: {},
          enabled: {
            on: {
              [ACTION_TYPES.BLUR]: '.idle',
              [ACTION_TYPES.FOCUS]: '.active.focus.unknown',
              [ACTION_TYPES.OPEN]: '.active.focus.unknown',
              [ACTION_TYPES.ITEM_CLICK]: {
                actions: 'selectOrDeselect',
              },
            },
            initial: 'unknown',
            states: {
              unknown: {
                on: {
                  '': [{ target: 'active', cond: ctx => Boolean(ctx.open) }, { target: 'idle' }],
                },
              },

              idle: {
                on: {
                  [ACTION_TYPES.FOCUS]: 'active.focus.unknown',
                },
              },
              active: {
                type: 'parallel',
                on: {
                  [ACTION_TYPES.BLUR]: 'idle',
                },
                states: {
                  search: {
                    initial: 'unknown',

                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'explicit', cond: ctx => Boolean(ctx.showSearch) },
                            { target: 'implicit' },
                          ],
                        },
                      },
                      explicit: {
                        on: {
                          [ACTION_TYPES.SEARCH_QUERY_UPDATE]: {
                            actions: [
                              'updateSearch',
                              'updateVisibleOptions',
                              'restoreFocusOrFocusFirst',
                            ],
                          },
                        },
                      },
                      implicit: {
                        initial: 'idle',
                        states: {
                          idle: {
                            onEntry: 'cleanSearch',
                            on: {
                              [ACTION_TYPES.SEARCH_QUERY_UPDATE]: {
                                target: 'processInput',
                                actions: 'updateSearch',
                              },
                            },
                          },
                          resetTimeout: {
                            on: {
                              '': 'processInput',
                            },
                          },

                          processInput: {
                            after: {
                              200: 'search',
                            },
                            on: {
                              [ACTION_TYPES.SEARCH_QUERY_UPDATE]: {
                                target: 'resetTimeout',
                                actions: 'updateSearch',
                              },
                            },
                          },

                          search: {
                            on: {
                              '': {
                                target: 'idle',

                                actions: 'setFocusToSearchedOption',
                              },
                            },
                          },
                        },
                      },
                    },
                  },

                  navigation: {
                    on: {
                      [ACTION_TYPES.CLOSE]: {
                        actions: 'setNavTypeKeyboard',
                        target: '.keyboard',
                      },
                    },
                    initial: 'unknown',
                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'mouse', cond: ctx => ctx.lastNavigationType === 'mouse' },
                            { target: 'keyboard' },
                          ],
                        },
                      },
                      keyboard: {
                        on: {
                          [ACTION_TYPES.MOUSE_MOVE]: {
                            target: 'mouse',
                            actions: 'setNavTypeMouse',
                          },
                        },
                      },
                      mouse: {
                        on: {
                          [ACTION_TYPES.KEY_PRESS]: {
                            target: 'keyboard',
                            actions: 'setNavTypeKeyboard',
                          },
                        },
                      },
                    },
                  },
                  focus: {
                    initial: 'unknown',
                    on: {
                      [ACTION_TYPES.CLOSE]: {
                        target: '.button',
                      },
                    },
                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'button', in: '#inputSelect.open.off' },
                            { target: 'listItem', cond: ctx => ctx.itemFocusIdx !== null },
                          ],
                        },
                      },
                      button: {},
                      listItem: {
                        on: {
                          [ACTION_TYPES.FOCUS_NEXT_ITEM]: {
                            actions: 'setNextFocusedItem',
                          },
                          [ACTION_TYPES.FOCUS_PREV_ITEM]: {
                            actions: 'setPrevFocusedItem',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    actions: {
      updateSearch: assign<Context>({
        searchQuery: (_, e) => e.payload,
      }),
      cleanSearch: assign<Context>({
        searchQuery: '',
        visibleOptions: ctx => ctx.options,
      }),
      syncProps: assign<Context>((ctx, e) => ({
        ...ctx,
        ...e.payload,
        valueFromProps: e.payload.valueFromProps,
        visibleOptions: e.payload.options !== ctx.options ? e.payload.options : ctx.visibleOptions,
      })),
      restoreFocusOrFocusFirst: assign<Context>({
        itemFocusIdx: ctx =>
          ctx.selectedItems.length > 0
            ? ctx.visibleOptions.findIndex(x => isEqualOptions(x, ctx.selectedItems[0]))
            : 0,
      }),
      setFocusToSearchedOption: assign<Context>({
        itemFocusIdx: ctx => {
          const newIdx = ctx.options.findIndex(x =>
            x.label.toLowerCase().startsWith(ctx.searchQuery.toLowerCase()),
          );
          return newIdx !== -1 && !ctx.options[newIdx].disabled ? newIdx : ctx.itemFocusIdx;
        },
      }),
      setNextFocusedItem: assign<Context>({
        itemFocusIdx: ctx => {
          const MAX_IDX = ctx.visibleOptions.length + ctx.actions.length;
          return ctx.itemFocusIdx !== null ? (ctx.itemFocusIdx + 1) % MAX_IDX : 0;
        },
      }),
      setPrevFocusedItem: assign<Context>({
        itemFocusIdx: ctx => {
          const MAX_IDX = ctx.visibleOptions.length + ctx.actions.length;
          return ctx.itemFocusIdx !== null && ctx.itemFocusIdx - 1 >= 0
            ? ctx.itemFocusIdx - 1
            : MAX_IDX - 1;
        },
      }),
      setNavTypeKeyboard: assign<Context>({
        lastNavigationType: 'keyboard',
      }),
      setNavTypeMouse: assign<Context>({
        lastNavigationType: 'mouse',
      }),
      selectOrDeselect: send((ctx: Context, event: any) => {
        const isSelected = includesOption(ctx.selectedItems, event.payload);
        const type = isSelected ? ACTION_TYPES.DESELECT_ITEM : ACTION_TYPES.SELECT_ITEM;

        return {
          type,
          payload: event.payload,
        };
      }),
      sendSelectOrDeselectVisibleFocusedOption: send((ctx: Context) => {
        if (ctx.itemFocusIdx === null) return '';

        return {
          type: includesOption(ctx.selectedItems, ctx.visibleOptions[ctx.itemFocusIdx])
            ? ACTION_TYPES.DESELECT_ITEM
            : ACTION_TYPES.SELECT_ITEM,
          payload: [...ctx.visibleOptions, ...ctx.actions][ctx.itemFocusIdx],
        };
      }),
      resetSelection: assign<Context>({ selectedItems: [] }),
      deselectOption: assign<Context>({
        selectedItems: (ctx, { payload }) => {
          if (payload[SYMBOL_ALL]) {
            return [];
          }
          let predicate = (x: OptionLike) => !isEqualOptions(x, payload);
          if (ctx.options.some(x => x[SYMBOL_ALL])) {
            // @ts-ignore
            predicate = (x: OptionLike) => !x[SYMBOL_ALL] && !isEqualOptions(x, payload);
          }
          return ctx.selectedItems.filter(predicate);
        },
      }),
      updateVisibleOptions: assign<Context>({
        visibleOptions: (ctx, e) => {
          const newOptions = ctx.options.filter(x =>
            x.label.toLowerCase().includes(e.payload.toLowerCase()),
          );
          return newOptions;
        },
      }),

      updateUncommittedItems: assign<Context>({
        uncommitedSelectedItems: (ctx, e) => {
          if (ctx.multiselect) {
            if (e.type === ACTION_TYPES.SELECT_ITEM) {
              const activeOptions = ctx.options.filter(x => !x.disabled);
              if (e.payload[SYMBOL_ALL]) {
                return activeOptions;
              }
              let newSelectedItems = ctx.selectedItems.concat(e.payload);
              const selectAllOption = ctx.options.find(x => x[SYMBOL_ALL]);
              if (selectAllOption && newSelectedItems.length === activeOptions.length - 1) {
                newSelectedItems = newSelectedItems.concat(selectAllOption);
              }
              return newSelectedItems;
              // eslint-disable-next-line no-else-return
            } else if (e.type === ACTION_TYPES.DESELECT_ITEM) {
              if (e.payload[SYMBOL_ALL]) {
                return [];
              }
              let predicate = (x: OptionLike) => !isEqualOptions(x, e.payload);
              if (ctx.options.some(x => x[SYMBOL_ALL])) {
                // @ts-ignore
                predicate = (x: OptionLike) => !x[SYMBOL_ALL] && !isEqualOptions(x, e.payload);
              }
              return ctx.selectedItems.filter(predicate);
            }
          }
          return [e.payload];
        },
      }),

      commitSelectedItems: assign<Context>({
        selectedItems: ctx => ctx.uncommitedSelectedItems,
        uncommitedSelectedItems: [],
      }),
      uncommitSelectedItems: assign<Context>({
        uncommitedSelectedItems: [],
      }),
      forceValueFromProps: assign<Context>({ selectedItems: ctx => ctx.valueFromProps }),
    } as any,
  },
);
