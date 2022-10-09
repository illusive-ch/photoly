import { useSSRContext, ref, computed, watch, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, renderList, Transition, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/inertia";
import { usePage, Link, Head } from "@inertiajs/inertia-vue3";
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItems, MenuItem, DisclosurePanel, TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { HomeIcon, DocumentMagnifyingGlassIcon, ChatBubbleOvalLeftEllipsisIcon, UsersIcon, CogIcon, Bars3Icon, XMarkIcon, BellIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/outline";
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationMark.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(() => {
      var _a;
      return ((_a = usePage().props.value.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.value.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && unref(message)) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": unref(style) == "success", "bg-red-700": unref(style) == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": unref(style) == "success", "bg-red-600": unref(style) == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (unref(style) == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(style) == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 font-medium text-sm text-white truncate">${ssrInterpolate(unref(message))}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": unref(style) == "success", "hover:bg-red-600 focus:bg-red-600": unref(style) == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "bg-primary-color-50 md:bg-transparent border-primary-color-400 text-primary-color inline-flex items-center md:border-b-2 text-base md:text-sm font-medium leading-5 focus:outline-none focus:border-primary-color-700 py-2 px-3 transition border-l-4 md:border-l-0" : "inline-flex items-center sm:py-3 md:border-b-2 border-transparent text-base md:text-sm font-medium leading-5 text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent hover:text-gray-900 group transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { title: "Home", route: route("home"), active: route().current("home"), icon: HomeIcon },
      {
        title: "My tests",
        route: route("subject.mine"),
        active: route().current("subject.mine"),
        icon: DocumentMagnifyingGlassIcon
      },
      {
        title: "Create Test",
        route: route("category.subjects.create", 1),
        active: route().current("category.subjects.create", 1),
        icon: ChatBubbleOvalLeftEllipsisIcon
      },
      {
        title: "Vote",
        route: route("category.subjects.index", 1),
        active: route().current("category.subjects.index", 1),
        icon: UsersIcon
      },
      {
        title: "Billing",
        route: route("spark.portal"),
        active: route().current("spark.portal"),
        icon: CogIcon
      }
    ];
    const secondaryNavigation = [
      { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
      { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon }
    ];
    ref(false);
    ref(true);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Disclosure), {
        as: "nav",
        class: "bg-white shadow"
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"${_scopeId}><div class="flex h-16 justify-between"${_scopeId}><div class="flex px-2 lg:px-0"${_scopeId}><div class="flex flex-shrink-0 items-center"${_scopeId}><img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"${_scopeId}><img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"${_scopeId}></div><div class="hidden lg:ml-6 lg:flex lg:space-x-8"${_scopeId}><!--[-->`);
            ssrRenderList(navigation, (item) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                key: item.title,
                href: item.route,
                active: item.active
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="flex items-center lg:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>Open main menu</span>`);
                  if (!open) {
                    _push3(ssrRenderComponent(unref(Bars3Icon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(XMarkIcon), {
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "Open main menu"),
                    !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                      key: 0,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    })) : (openBlock(), createBlock(unref(XMarkIcon), {
                      key: 1,
                      class: "block h-6 w-6",
                      "aria-hidden": "true"
                    }))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden lg:ml-4 lg:flex lg:items-center"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.hasTeamFeatures && _ctx.$page.props.user) {
              _push2(ssrRenderComponent(unref(Menu), {
                as: "div",
                class: "relative ml-4 flex-shrink-0"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(MenuButton), { class: "flex items-center mr-4" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$page.props.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId3}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId3}></path></svg>`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: "ml-2 -mr-0.5 h-4 w-4",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(MenuItem), null, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Link), {
                                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  active: _ctx.route().current("teams.show")
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Team Settings `);
                                    } else {
                                      return [
                                        createTextVNode(" Team Settings ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    active: _ctx.route().current("teams.show")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Team Settings ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class", "active"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(MenuItem), null, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (_ctx.$page.props.jetstream.canCreateTeams) {
                                  _push5(ssrRenderComponent(unref(Link), {
                                    href: _ctx.route("teams.create"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    active: _ctx.route().current("teams.create")
                                  }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Create New Team `);
                                      } else {
                                        return [
                                          createTextVNode(" Create New Team ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("teams.create"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    active: _ctx.route().current("teams.create")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create New Team ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class", "active"])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId3}> Switch Teams </div><!--[-->`);
                          ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
                            _push4(ssrRenderComponent(unref(MenuItem), {
                              key: team.id
                            }, {
                              default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<form${_scopeId4}>`);
                                  _push5(ssrRenderComponent(unref(Link), { as: "button" }, {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="${ssrRenderClass([[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"])}"${_scopeId5}>`);
                                        if (team.id == _ctx.$page.props.user.current_team_id) {
                                          _push6(`<svg class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId5}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId5}></path></svg>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<div${_scopeId5}>${ssrInterpolate(team.name)}</div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: [[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"]
                                          }, [
                                            team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                              key: 0,
                                              class: "mr-2 h-5 w-5 text-green-400",
                                              fill: "none",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24"
                                            }, [
                                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", null, toDisplayString(team.name), 1)
                                          ], 2)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</form>`);
                                } else {
                                  return [
                                    createVNode("form", {
                                      onSubmit: withModifiers(($event) => _ctx.switchToTeam(team), ["prevent"])
                                    }, [
                                      createVNode(unref(Link), { as: "button" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: [[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"]
                                          }, [
                                            team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                              key: 0,
                                              class: "mr-2 h-5 w-5 text-green-400",
                                              fill: "none",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24"
                                            }, [
                                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", null, toDisplayString(team.name), 1)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 40, ["onSubmit"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(unref(MenuItem), null, {
                              default: withCtx(({ active }) => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  active: _ctx.route().current("teams.show")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Team Settings ")
                                  ]),
                                  _: 2
                                }, 1032, ["href", "class", "active"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(MenuItem), null, {
                              default: withCtx(({ active }) => [
                                _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(unref(Link), {
                                  key: 0,
                                  href: _ctx.route("teams.create"),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  active: _ctx.route().current("teams.create")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Create New Team ")
                                  ]),
                                  _: 2
                                }, 1032, ["href", "class", "active"])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                              return openBlock(), createBlock(unref(MenuItem), {
                                key: team.id
                              }, {
                                default: withCtx(({ active }) => [
                                  createVNode("form", {
                                    onSubmit: withModifiers(($event) => _ctx.switchToTeam(team), ["prevent"])
                                  }, [
                                    createVNode(unref(Link), { as: "button" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: [[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"]
                                        }, [
                                          team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                            key: 0,
                                            class: "mr-2 h-5 w-5 text-green-400",
                                            fill: "none",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24"
                                          }, [
                                            createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                          ])) : createCommentVNode("", true),
                                          createVNode("div", null, toDisplayString(team.name), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 40, ["onSubmit"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode(unref(MenuButton), { class: "flex items-center mr-4" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: "ml-2 -mr-0.5 h-4 w-4",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Transition, {
                        "enter-active-class": "transition ease-out duration-100",
                        "enter-from-class": "transform opacity-0 scale-95",
                        "enter-to-class": "transform opacity-100 scale-100",
                        "leave-active-class": "transition ease-in duration-75",
                        "leave-from-class": "transform opacity-100 scale-100",
                        "leave-to-class": "transform opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                            default: withCtx(() => [
                              createVNode(unref(MenuItem), null, {
                                default: withCtx(({ active }) => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    active: _ctx.route().current("teams.show")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Team Settings ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class", "active"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(MenuItem), null, {
                                default: withCtx(({ active }) => [
                                  _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("teams.create"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    active: _ctx.route().current("teams.create")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create New Team ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class", "active"])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                                return openBlock(), createBlock(unref(MenuItem), {
                                  key: team.id
                                }, {
                                  default: withCtx(({ active }) => [
                                    createVNode("form", {
                                      onSubmit: withModifiers(($event) => _ctx.switchToTeam(team), ["prevent"])
                                    }, [
                                      createVNode(unref(Link), { as: "button" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: [[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"]
                                          }, [
                                            team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                              key: 0,
                                              class: "mr-2 h-5 w-5 text-green-400",
                                              fill: "none",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24"
                                            }, [
                                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                            ])) : createCommentVNode("", true),
                                            createVNode("div", null, toDisplayString(team.name), 1)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ], 40, ["onSubmit"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user) {
              _push2(`<button type="button" class="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"${_scopeId}><span class="sr-only"${_scopeId}>View notifications</span>`);
              _push2(ssrRenderComponent(unref(BellIcon), {
                class: "h-6 w-6",
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user) {
              _push2(ssrRenderComponent(unref(Menu), {
                as: "div",
                class: "relative ml-4 flex-shrink-0"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(MenuButton), { class: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="sr-only"${_scopeId3}>Open user menu</span><img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("span", { class: "sr-only" }, "Open user menu"),
                            createVNode("img", {
                              class: "h-8 w-8 rounded-full",
                              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                              alt: ""
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(MenuItem), null, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Link), {
                                  href: _ctx.route("profile.show"),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  method: "post",
                                  type: "button"
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Settings `);
                                    } else {
                                      return [
                                        createTextVNode(" Settings ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("profile.show"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    method: "post",
                                    type: "button"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Settings ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(MenuItem), { class: "z-20" }, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Link), {
                                  href: _ctx.route("logout"),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  method: "post",
                                  as: "button",
                                  type: "button"
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Sign Out `);
                                    } else {
                                      return [
                                        createTextVNode(" Sign Out ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("logout"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    method: "post",
                                    as: "button",
                                    type: "button"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign Out ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(MenuItem), null, {
                              default: withCtx(({ active }) => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("profile.show"),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  method: "post",
                                  type: "button"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Settings ")
                                  ]),
                                  _: 2
                                }, 1032, ["href", "class"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(MenuItem), { class: "z-20" }, {
                              default: withCtx(({ active }) => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("logout"),
                                  class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                  method: "post",
                                  as: "button",
                                  type: "button"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Sign Out ")
                                  ]),
                                  _: 2
                                }, 1032, ["href", "class"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode(unref(MenuButton), { class: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "sr-only" }, "Open user menu"),
                            createVNode("img", {
                              class: "h-8 w-8 rounded-full",
                              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                              alt: ""
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Transition, {
                        "enter-active-class": "transition ease-out duration-100",
                        "enter-from-class": "transform opacity-0 scale-95",
                        "enter-to-class": "transform opacity-100 scale-100",
                        "leave-active-class": "transition ease-in duration-75",
                        "leave-from-class": "transform opacity-100 scale-100",
                        "leave-to-class": "transform opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                            default: withCtx(() => [
                              createVNode(unref(MenuItem), null, {
                                default: withCtx(({ active }) => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("profile.show"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    method: "post",
                                    type: "button"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Settings ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(MenuItem), { class: "z-20" }, {
                                default: withCtx(({ active }) => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("logout"),
                                    class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                    method: "post",
                                    as: "button",
                                    type: "button"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Sign Out ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "class"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), { class: "lg:hidden" }, {
              default: withCtx(({ close }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionRoot), {
                    as: "template",
                    show: open
                  }, {
                    default: withCtx((_, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Dialog), {
                          as: "div",
                          class: "relative z-40 md:hidden",
                          onClose: ($event) => close()
                        }, {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TransitionChild), {
                                as: "template",
                                enter: "transition-opacity ease-linear duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="fixed inset-0 bg-gray-600 bg-opacity-75"${_scopeId5}></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<div class="fixed inset-0 z-40 flex"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(TransitionChild), {
                                as: "template",
                                enter: "transition ease-in-out duration-300 transform",
                                "enter-from": "-translate-x-full",
                                "enter-to": "translate-x-0",
                                leave: "transition ease-in-out duration-300 transform",
                                "leave-from": "translate-x-0",
                                "leave-to": "-translate-x-full"
                              }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(TransitionChild), {
                                            as: "template",
                                            enter: "ease-in-out duration-300",
                                            "enter-from": "opacity-0",
                                            "enter-to": "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            "leave-from": "opacity-100",
                                            "leave-to": "opacity-0"
                                          }, {
                                            default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="absolute top-0 right-0 -mr-14 p-1"${_scopeId7}><button type="button" class="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(unref(XMarkIcon), {
                                                  class: "h-6 w-6 text-white",
                                                  "aria-hidden": "true"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<span class="sr-only"${_scopeId7}>Close sidebar</span></button></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                                    createVNode("button", {
                                                      type: "button",
                                                      class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                                      onClick: ($event) => close()
                                                    }, [
                                                      createVNode(unref(XMarkIcon), {
                                                        class: "h-6 w-6 text-white",
                                                        "aria-hidden": "true"
                                                      }),
                                                      createVNode("span", { class: "sr-only" }, "Close sidebar")
                                                    ], 8, ["onClick"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`<div class="flex flex-shrink-0 items-center px-4"${_scopeId6}><img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=purple&amp;shade=600" alt="Easywire"${_scopeId6}></div><div class="mt-5 h-0 flex-1 overflow-y-auto"${_scopeId6}><nav class="flex h-full flex-col"${_scopeId6}><div class="space-y-1 grid grid-cols-1"${_scopeId6}><!--[-->`);
                                          ssrRenderList(navigation, (item) => {
                                            _push7(ssrRenderComponent(_sfc_main$2, {
                                              key: item.title,
                                              href: item.route,
                                              active: item.active
                                            }, {
                                              default: withCtx((_5, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  ssrRenderVNode(_push8, createVNode(resolveDynamicComponent(item.icon), {
                                                    class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                    "aria-hidden": "true"
                                                  }, null), _parent8, _scopeId7);
                                                  _push8(` ${ssrInterpolate(item.title)}`);
                                                } else {
                                                  return [
                                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                      class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                      "aria-hidden": "true"
                                                    }, null, 8, ["class"])),
                                                    createTextVNode(" " + toDisplayString(item.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]--></div><div class="mt-auto space-y-1 pt-10"${_scopeId6}><!--[-->`);
                                          ssrRenderList(secondaryNavigation, (item) => {
                                            _push7(`<a${ssrRenderAttr("href", item.href)} class="group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"${_scopeId6}>`);
                                            ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.icon), {
                                              class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                              "aria-hidden": "true"
                                            }, null), _parent7, _scopeId6);
                                            _push7(` ${ssrInterpolate(item.title)}</a>`);
                                          });
                                          _push7(`<!--]--></div></nav></div>`);
                                        } else {
                                          return [
                                            createVNode(unref(TransitionChild), {
                                              as: "template",
                                              enter: "ease-in-out duration-300",
                                              "enter-from": "opacity-0",
                                              "enter-to": "opacity-100",
                                              leave: "ease-in-out duration-300",
                                              "leave-from": "opacity-100",
                                              "leave-to": "opacity-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                                  createVNode("button", {
                                                    type: "button",
                                                    class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                                    onClick: ($event) => close()
                                                  }, [
                                                    createVNode(unref(XMarkIcon), {
                                                      class: "h-6 w-6 text-white",
                                                      "aria-hidden": "true"
                                                    }),
                                                    createVNode("span", { class: "sr-only" }, "Close sidebar")
                                                  ], 8, ["onClick"])
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                              createVNode("img", {
                                                class: "h-8 w-auto",
                                                src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                                alt: "Easywire"
                                              })
                                            ]),
                                            createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                              createVNode("nav", { class: "flex h-full flex-col" }, [
                                                createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                                  (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                                    return createVNode(_sfc_main$2, {
                                                      key: item.title,
                                                      href: item.route,
                                                      active: item.active
                                                    }, {
                                                      default: withCtx(() => [
                                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                          class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                          "aria-hidden": "true"
                                                        }, null, 8, ["class"])),
                                                        createTextVNode(" " + toDisplayString(item.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["href", "active"]);
                                                  }), 64))
                                                ]),
                                                createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                                  (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                                    return createVNode("a", {
                                                      key: item.title,
                                                      href: item.href,
                                                      class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                    }, [
                                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                        class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                        "aria-hidden": "true"
                                                      })),
                                                      createTextVNode(" " + toDisplayString(item.title), 1)
                                                    ], 8, ["href"]);
                                                  }), 64))
                                                ])
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(TransitionChild), {
                                            as: "template",
                                            enter: "ease-in-out duration-300",
                                            "enter-from": "opacity-0",
                                            "enter-to": "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            "leave-from": "opacity-100",
                                            "leave-to": "opacity-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                                createVNode("button", {
                                                  type: "button",
                                                  class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                                  onClick: ($event) => close()
                                                }, [
                                                  createVNode(unref(XMarkIcon), {
                                                    class: "h-6 w-6 text-white",
                                                    "aria-hidden": "true"
                                                  }),
                                                  createVNode("span", { class: "sr-only" }, "Close sidebar")
                                                ], 8, ["onClick"])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                            createVNode("img", {
                                              class: "h-8 w-auto",
                                              src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                              alt: "Easywire"
                                            })
                                          ]),
                                          createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                            createVNode("nav", { class: "flex h-full flex-col" }, [
                                              createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                                  return createVNode(_sfc_main$2, {
                                                    key: item.title,
                                                    href: item.route,
                                                    active: item.active
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                        class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                        "aria-hidden": "true"
                                                      }, null, 8, ["class"])),
                                                      createTextVNode(" " + toDisplayString(item.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href", "active"]);
                                                }), 64))
                                              ]),
                                              createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                                  return createVNode("a", {
                                                    key: item.title,
                                                    href: item.href,
                                                    class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                  }, [
                                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                      class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                      "aria-hidden": "true"
                                                    })),
                                                    createTextVNode(" " + toDisplayString(item.title), 1)
                                                  ], 8, ["href"]);
                                                }), 64))
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<div class="w-14 flex-shrink-0" aria-hidden="true"${_scopeId4}></div></div>`);
                            } else {
                              return [
                                createVNode(unref(TransitionChild), {
                                  as: "template",
                                  enter: "transition-opacity ease-linear duration-300",
                                  "enter-from": "opacity-0",
                                  "enter-to": "opacity-100",
                                  leave: "transition-opacity ease-linear duration-300",
                                  "leave-from": "opacity-100",
                                  "leave-to": "opacity-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                                  createVNode(unref(TransitionChild), {
                                    as: "template",
                                    enter: "transition ease-in-out duration-300 transform",
                                    "enter-from": "-translate-x-full",
                                    "enter-to": "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    "leave-from": "translate-x-0",
                                    "leave-to": "-translate-x-full"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(TransitionChild), {
                                            as: "template",
                                            enter: "ease-in-out duration-300",
                                            "enter-from": "opacity-0",
                                            "enter-to": "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            "leave-from": "opacity-100",
                                            "leave-to": "opacity-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                                createVNode("button", {
                                                  type: "button",
                                                  class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                                  onClick: ($event) => close()
                                                }, [
                                                  createVNode(unref(XMarkIcon), {
                                                    class: "h-6 w-6 text-white",
                                                    "aria-hidden": "true"
                                                  }),
                                                  createVNode("span", { class: "sr-only" }, "Close sidebar")
                                                ], 8, ["onClick"])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                            createVNode("img", {
                                              class: "h-8 w-auto",
                                              src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                              alt: "Easywire"
                                            })
                                          ]),
                                          createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                            createVNode("nav", { class: "flex h-full flex-col" }, [
                                              createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                                  return createVNode(_sfc_main$2, {
                                                    key: item.title,
                                                    href: item.route,
                                                    active: item.active
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                        class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                        "aria-hidden": "true"
                                                      }, null, 8, ["class"])),
                                                      createTextVNode(" " + toDisplayString(item.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["href", "active"]);
                                                }), 64))
                                              ]),
                                              createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                                (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                                  return createVNode("a", {
                                                    key: item.title,
                                                    href: item.href,
                                                    class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                  }, [
                                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                      class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                      "aria-hidden": "true"
                                                    })),
                                                    createTextVNode(" " + toDisplayString(item.title), 1)
                                                  ], 8, ["href"]);
                                                }), 64))
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", {
                                    class: "w-14 flex-shrink-0",
                                    "aria-hidden": "true"
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Dialog), {
                            as: "div",
                            class: "relative z-40 md:hidden",
                            onClose: ($event) => close()
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(TransitionChild), {
                                as: "template",
                                enter: "transition-opacity ease-linear duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                                createVNode(unref(TransitionChild), {
                                  as: "template",
                                  enter: "transition ease-in-out duration-300 transform",
                                  "enter-from": "-translate-x-full",
                                  "enter-to": "translate-x-0",
                                  leave: "transition ease-in-out duration-300 transform",
                                  "leave-from": "translate-x-0",
                                  "leave-to": "-translate-x-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(TransitionChild), {
                                          as: "template",
                                          enter: "ease-in-out duration-300",
                                          "enter-from": "opacity-0",
                                          "enter-to": "opacity-100",
                                          leave: "ease-in-out duration-300",
                                          "leave-from": "opacity-100",
                                          "leave-to": "opacity-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                              createVNode("button", {
                                                type: "button",
                                                class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                                onClick: ($event) => close()
                                              }, [
                                                createVNode(unref(XMarkIcon), {
                                                  class: "h-6 w-6 text-white",
                                                  "aria-hidden": "true"
                                                }),
                                                createVNode("span", { class: "sr-only" }, "Close sidebar")
                                              ], 8, ["onClick"])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                          createVNode("img", {
                                            class: "h-8 w-auto",
                                            src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                            alt: "Easywire"
                                          })
                                        ]),
                                        createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                          createVNode("nav", { class: "flex h-full flex-col" }, [
                                            createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                              (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                                return createVNode(_sfc_main$2, {
                                                  key: item.title,
                                                  href: item.route,
                                                  active: item.active
                                                }, {
                                                  default: withCtx(() => [
                                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                      class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                      "aria-hidden": "true"
                                                    }, null, 8, ["class"])),
                                                    createTextVNode(" " + toDisplayString(item.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["href", "active"]);
                                              }), 64))
                                            ]),
                                            createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                              (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                                return createVNode("a", {
                                                  key: item.title,
                                                  href: item.href,
                                                  class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                }, [
                                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                    class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                    "aria-hidden": "true"
                                                  })),
                                                  createTextVNode(" " + toDisplayString(item.title), 1)
                                                ], 8, ["href"]);
                                              }), 64))
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", {
                                  class: "w-14 flex-shrink-0",
                                  "aria-hidden": "true"
                                })
                              ])
                            ]),
                            _: 2
                          }, 1032, ["onClose"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TransitionRoot), {
                      as: "template",
                      show: open
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Dialog), {
                          as: "div",
                          class: "relative z-40 md:hidden",
                          onClose: ($event) => close()
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition-opacity ease-linear duration-300",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "transition-opacity ease-linear duration-300",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                              createVNode(unref(TransitionChild), {
                                as: "template",
                                enter: "transition ease-in-out duration-300 transform",
                                "enter-from": "-translate-x-full",
                                "enter-to": "translate-x-0",
                                leave: "transition ease-in-out duration-300 transform",
                                "leave-from": "translate-x-0",
                                "leave-to": "-translate-x-full"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TransitionChild), {
                                        as: "template",
                                        enter: "ease-in-out duration-300",
                                        "enter-from": "opacity-0",
                                        "enter-to": "opacity-100",
                                        leave: "ease-in-out duration-300",
                                        "leave-from": "opacity-100",
                                        "leave-to": "opacity-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                            createVNode("button", {
                                              type: "button",
                                              class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                              onClick: ($event) => close()
                                            }, [
                                              createVNode(unref(XMarkIcon), {
                                                class: "h-6 w-6 text-white",
                                                "aria-hidden": "true"
                                              }),
                                              createVNode("span", { class: "sr-only" }, "Close sidebar")
                                            ], 8, ["onClick"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                        createVNode("img", {
                                          class: "h-8 w-auto",
                                          src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                          alt: "Easywire"
                                        })
                                      ]),
                                      createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                        createVNode("nav", { class: "flex h-full flex-col" }, [
                                          createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                            (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                              return createVNode(_sfc_main$2, {
                                                key: item.title,
                                                href: item.route,
                                                active: item.active
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                    class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                    "aria-hidden": "true"
                                                  }, null, 8, ["class"])),
                                                  createTextVNode(" " + toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["href", "active"]);
                                            }), 64))
                                          ]),
                                          createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                            (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                              return createVNode("a", {
                                                key: item.title,
                                                href: item.href,
                                                class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                              }, [
                                                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                  class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                  "aria-hidden": "true"
                                                })),
                                                createTextVNode(" " + toDisplayString(item.title), 1)
                                              ], 8, ["href"]);
                                            }), 64))
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", {
                                class: "w-14 flex-shrink-0",
                                "aria-hidden": "true"
                              })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClose"])
                      ]),
                      _: 2
                    }, 1032, ["show"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-7xl px-2 sm:px-4 lg:px-8" }, [
                createVNode("div", { class: "flex h-16 justify-between" }, [
                  createVNode("div", { class: "flex px-2 lg:px-0" }, [
                    createVNode("div", { class: "flex flex-shrink-0 items-center" }, [
                      createVNode("img", {
                        class: "block h-8 w-auto lg:hidden",
                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                        alt: "Your Company"
                      }),
                      createVNode("img", {
                        class: "hidden h-8 w-auto lg:block",
                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                        alt: "Your Company"
                      })
                    ]),
                    createVNode("div", { class: "hidden lg:ml-6 lg:flex lg:space-x-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                        return createVNode(_sfc_main$2, {
                          key: item.title,
                          href: item.route,
                          active: item.active
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "active"]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center lg:hidden" }, [
                    createVNode(unref(DisclosureButton), { class: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open main menu"),
                        !open ? (openBlock(), createBlock(unref(Bars3Icon), {
                          key: 0,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        })) : (openBlock(), createBlock(unref(XMarkIcon), {
                          key: 1,
                          class: "block h-6 w-6",
                          "aria-hidden": "true"
                        }))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "hidden lg:ml-4 lg:flex lg:items-center" }, [
                    _ctx.$page.props.jetstream.hasTeamFeatures && _ctx.$page.props.user ? (openBlock(), createBlock(unref(Menu), {
                      key: 0,
                      as: "div",
                      class: "relative ml-4 flex-shrink-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(unref(MenuButton), { class: "flex items-center mr-4" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                              (openBlock(), createBlock("svg", {
                                class: "ml-2 -mr-0.5 h-4 w-4",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-100",
                          "enter-from-class": "transform opacity-0 scale-95",
                          "enter-to-class": "transform opacity-100 scale-100",
                          "leave-active-class": "transition ease-in duration-75",
                          "leave-from-class": "transform opacity-100 scale-100",
                          "leave-to-class": "transform opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                              default: withCtx(() => [
                                createVNode(unref(MenuItem), null, {
                                  default: withCtx(({ active }) => [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
                                      class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                      active: _ctx.route().current("teams.show")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Team Settings ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "class", "active"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(MenuItem), null, {
                                  default: withCtx(({ active }) => [
                                    _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(unref(Link), {
                                      key: 0,
                                      href: _ctx.route("teams.create"),
                                      class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                      active: _ctx.route().current("teams.create")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create New Team ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "class", "active"])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                                  return openBlock(), createBlock(unref(MenuItem), {
                                    key: team.id
                                  }, {
                                    default: withCtx(({ active }) => [
                                      createVNode("form", {
                                        onSubmit: withModifiers(($event) => _ctx.switchToTeam(team), ["prevent"])
                                      }, [
                                        createVNode(unref(Link), { as: "button" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: [[active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"], "flex items-center"]
                                            }, [
                                              team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock("svg", {
                                                key: 0,
                                                class: "mr-2 h-5 w-5 text-green-400",
                                                fill: "none",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24"
                                              }, [
                                                createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                              ])) : createCommentVNode("", true),
                                              createVNode("div", null, toDisplayString(team.name), 1)
                                            ], 2)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ], 40, ["onSubmit"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _ctx.$page.props.user ? (openBlock(), createBlock("button", {
                      key: 1,
                      type: "button",
                      class: "flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    }, [
                      createVNode("span", { class: "sr-only" }, "View notifications"),
                      createVNode(unref(BellIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ])) : createCommentVNode("", true),
                    _ctx.$page.props.user ? (openBlock(), createBlock(unref(Menu), {
                      key: 2,
                      as: "div",
                      class: "relative ml-4 flex-shrink-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(unref(MenuButton), { class: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "sr-only" }, "Open user menu"),
                              createVNode("img", {
                                class: "h-8 w-8 rounded-full",
                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                alt: ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Transition, {
                          "enter-active-class": "transition ease-out duration-100",
                          "enter-from-class": "transform opacity-0 scale-95",
                          "enter-to-class": "transform opacity-100 scale-100",
                          "leave-active-class": "transition ease-in duration-75",
                          "leave-from-class": "transform opacity-100 scale-100",
                          "leave-to-class": "transform opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(MenuItems), { class: "absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                              default: withCtx(() => [
                                createVNode(unref(MenuItem), null, {
                                  default: withCtx(({ active }) => [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("profile.show"),
                                      class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                      method: "post",
                                      type: "button"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Settings ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "class"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(MenuItem), { class: "z-20" }, {
                                  default: withCtx(({ active }) => [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("logout"),
                                      class: [active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"],
                                      method: "post",
                                      as: "button",
                                      type: "button"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Sign Out ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "class"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode(unref(DisclosurePanel), { class: "lg:hidden" }, {
                default: withCtx(({ close }) => [
                  createVNode(unref(TransitionRoot), {
                    as: "template",
                    show: open
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Dialog), {
                        as: "div",
                        class: "relative z-40 md:hidden",
                        onClose: ($event) => close()
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition-opacity ease-linear duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-gray-600 bg-opacity-75" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition ease-in-out duration-300 transform",
                              "enter-from": "-translate-x-full",
                              "enter-to": "translate-x-0",
                              leave: "transition ease-in-out duration-300 transform",
                              "leave-from": "translate-x-0",
                              "leave-to": "-translate-x-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogPanel), { class: "relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(TransitionChild), {
                                      as: "template",
                                      enter: "ease-in-out duration-300",
                                      "enter-from": "opacity-0",
                                      "enter-to": "opacity-100",
                                      leave: "ease-in-out duration-300",
                                      "leave-from": "opacity-100",
                                      "leave-to": "opacity-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "absolute top-0 right-0 -mr-14 p-1" }, [
                                          createVNode("button", {
                                            type: "button",
                                            class: "flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none",
                                            onClick: ($event) => close()
                                          }, [
                                            createVNode(unref(XMarkIcon), {
                                              class: "h-6 w-6 text-white",
                                              "aria-hidden": "true"
                                            }),
                                            createVNode("span", { class: "sr-only" }, "Close sidebar")
                                          ], 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "flex flex-shrink-0 items-center px-4" }, [
                                      createVNode("img", {
                                        class: "h-8 w-auto",
                                        src: "https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600",
                                        alt: "Easywire"
                                      })
                                    ]),
                                    createVNode("div", { class: "mt-5 h-0 flex-1 overflow-y-auto" }, [
                                      createVNode("nav", { class: "flex h-full flex-col" }, [
                                        createVNode("div", { class: "space-y-1 grid grid-cols-1" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                                            return createVNode(_sfc_main$2, {
                                              key: item.title,
                                              href: item.route,
                                              active: item.active
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                  class: [item.active ? "text-primary-color-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"],
                                                  "aria-hidden": "true"
                                                }, null, 8, ["class"])),
                                                createTextVNode(" " + toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["href", "active"]);
                                          }), 64))
                                        ]),
                                        createVNode("div", { class: "mt-auto space-y-1 pt-10" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(secondaryNavigation, (item) => {
                                            return createVNode("a", {
                                              key: item.title,
                                              href: item.href,
                                              class: "group flex items-center border-l-4 border-transparent py-2 px-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }, [
                                              (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                class: "mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500",
                                                "aria-hidden": "true"
                                              })),
                                              createTextVNode(" " + toDisplayString(item.title), 1)
                                            ], 8, ["href"]);
                                          }), 64))
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", {
                              class: "w-14 flex-shrink-0",
                              "aria-hidden": "true"
                            })
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClose"])
                    ]),
                    _: 2
                  }, 1032, ["show"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
