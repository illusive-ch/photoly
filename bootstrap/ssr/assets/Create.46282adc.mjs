import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition, useSSRContext, computed, createTextVNode, withDirectives, vShow, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AppLayout.9bd727d7.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, TabGroup, TabList, Tab, TabPanels, TabPanel, RadioGroup, RadioGroupLabel, RadioGroupOption, SwitchGroup, Switch, SwitchLabel } from "@headlessui/vue";
import { a as _sfc_main$2, _ as _sfc_main$5 } from "./TextInput.4df6fbdc.mjs";
import { _ as _sfc_main$4 } from "./InputLabel.4e8d4ed9.mjs";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/vue/20/solid";
import { MediaLibraryAttachment } from "@spatie/media-library-pro-vue3-attachment";
import "@inertiajs/inertia";
import "@heroicons/vue/24/outline";
const _sfc_main$1 = {
  __name: "SelectWithCheck",
  __ssrInlineRender: true,
  props: [
    "modelValue",
    "label",
    "message",
    "options"
  ],
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const modelValue = ref(props.modelValue);
    if (typeof modelValue.value === "undefined") {
      modelValue.value = props.options[0];
      emit("update:modelValue", modelValue);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Listbox), {
        as: "div",
        modelValue: modelValue.value,
        "onUpdate:modelValue": [($event) => modelValue.value = $event, (value) => emit("update:modelValue", value)],
        by: "id"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ListboxLabel), { class: "block text-sm font-medium text-gray-700" }, null, _parent2, _scopeId));
            _push2(`<div class="relative mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ListboxButton), { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="block truncate capitalize"${_scopeId2}>${ssrInterpolate(modelValue.value.name)}</span><span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ChevronUpDownIcon), {
                    class: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "block truncate capitalize",
                      textContent: toDisplayString(modelValue.value.name)
                    }, null, 8, ["textContent"]),
                    createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                      createVNode(unref(ChevronUpDownIcon), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ListboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.options, (option) => {
                    _push3(ssrRenderComponent(unref(ListboxOption), {
                      as: "template",
                      key: option.id,
                      value: option
                    }, {
                      default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<li class="${ssrRenderClass([active ? "text-white bg-indigo-600" : "text-gray-900", "relative cursor-default select-none py-2 pl-8 pr-4"])}"${_scopeId3}><span class="${ssrRenderClass([selected ? "font-semibold" : "font-normal", "block truncate"])}"${_scopeId3}>${ssrInterpolate(option.name)}</span>`);
                          if (selected) {
                            _push4(`<span class="${ssrRenderClass([active ? "text-white" : "text-indigo-600", "absolute inset-y-0 left-0 flex items-center pl-1.5"])}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(CheckIcon), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        } else {
                          return [
                            createVNode("li", {
                              class: [active ? "text-white bg-indigo-600" : "text-gray-900", "relative cursor-default select-none py-2 pl-8 pr-4"]
                            }, [
                              createVNode("span", {
                                class: [selected ? "font-semibold" : "font-normal", "block truncate"],
                                textContent: toDisplayString(option.name)
                              }, null, 10, ["textContent"]),
                              selected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [active ? "text-white" : "text-indigo-600", "absolute inset-y-0 left-0 flex items-center pl-1.5"]
                              }, [
                                createVNode(unref(CheckIcon), {
                                  class: "h-5 w-5",
                                  "aria-hidden": "true"
                                })
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                      return openBlock(), createBlock(unref(ListboxOption), {
                        as: "template",
                        key: option.id,
                        value: option
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [active ? "text-white bg-indigo-600" : "text-gray-900", "relative cursor-default select-none py-2 pl-8 pr-4"]
                          }, [
                            createVNode("span", {
                              class: [selected ? "font-semibold" : "font-normal", "block truncate"],
                              textContent: toDisplayString(option.name)
                            }, null, 10, ["textContent"]),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [active ? "text-white" : "text-indigo-600", "absolute inset-y-0 left-0 flex items-center pl-1.5"]
                            }, [
                              createVNode(unref(CheckIcon), {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(ListboxLabel), {
                class: "block text-sm font-medium text-gray-700",
                textContent: toDisplayString(__props.label)
              }, null, 8, ["textContent"]),
              createVNode("div", { class: "relative mt-1" }, [
                createVNode(unref(ListboxButton), { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "block truncate capitalize",
                      textContent: toDisplayString(modelValue.value.name)
                    }, null, 8, ["textContent"]),
                    createVNode("span", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, [
                      createVNode(unref(ChevronUpDownIcon), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(Transition, {
                  "leave-active-class": "transition ease-in duration-100",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ListboxOptions), { class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.options, (option) => {
                          return openBlock(), createBlock(unref(ListboxOption), {
                            as: "template",
                            key: option.id,
                            value: option
                          }, {
                            default: withCtx(({ active, selected }) => [
                              createVNode("li", {
                                class: [active ? "text-white bg-indigo-600" : "text-gray-900", "relative cursor-default select-none py-2 pl-8 pr-4"]
                              }, [
                                createVNode("span", {
                                  class: [selected ? "font-semibold" : "font-normal", "block truncate"],
                                  textContent: toDisplayString(option.name)
                                }, null, 10, ["textContent"]),
                                selected ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: [active ? "text-white" : "text-indigo-600", "absolute inset-y-0 left-0 flex items-center pl-1.5"]
                                }, [
                                  createVNode(unref(CheckIcon), {
                                    class: "h-5 w-5",
                                    "aria-hidden": "true"
                                  })
                                ], 2)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: __props.message,
        class: "mt-2"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SelectWithCheck.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    media: Object,
    categories: Object
  },
  setup(__props) {
    const selectedTab = ref(0);
    const tabs = [
      { name: "Photo", selected: true },
      { name: "Category", selected: false },
      { name: "Details", selected: false },
      { name: "Test Size", selected: false }
    ];
    const form = useForm({
      _method: "POST",
      media: null,
      upload: false,
      category: {},
      options: {}
    });
    const setSubject = (subject) => {
      console.log("here");
      form.media = subject;
      form.upload = false;
      changeTab(selectedTab.value + 1);
    };
    const onUpload = (subject) => {
      form.upload = true;
      form.media = subject;
      console.log("ON UPLOAD SWITCHING");
      changeTab(1);
    };
    const changeTab = (index) => {
      resetOptions();
      selectedTab.value = index;
    };
    const resetOptions = () => {
      console.log("resetting");
      form.options = {};
    };
    const allowedAges = computed(() => {
      let ages = [];
      for (var i = 18; i <= 99; i++) {
        ages.push({
          id: i,
          name: `${i} yrs old`
        });
      }
      return ages;
    });
    const testMedia = computed(() => {
      if (form.media === null) {
        return null;
      }
      if (form.media.url) {
        return form.media.url;
      }
      console.log(form.media);
      const firstValue = Object.values(form.media)[0];
      if (firstValue.preview_url) {
        return firstValue.preview_url;
      }
      console.log("FORMMEDIA");
      console.log(form.media);
      return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Create New Test </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Create New Test ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"${_scopeId}><div class="bg-white rounded-md p-4"${_scopeId}><form${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabGroup), {
              defaultIndex: 0,
              selectedIndex: selectedTab.value,
              onChange: changeTab
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-b border-gray-200"${_scopeId2}><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TabList), { class: "mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(tabs, (tab) => {
                          _push4(ssrRenderComponent(unref(Tab), {
                            as: "template",
                            key: tab.name,
                            "aria-current": tab.selected ? tab.name : ""
                          }, {
                            default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<button type="button" class="${ssrRenderClass([[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}"${_scopeId4}>${ssrInterpolate(tab.name)}</button>`);
                              } else {
                                return [
                                  createVNode("button", {
                                    type: "button",
                                    class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                  }, toDisplayString(tab.name), 3)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                            return createVNode(unref(Tab), {
                              as: "template",
                              key: tab.name,
                              "aria-current": tab.selected ? tab.name : ""
                            }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  type: "button",
                                  class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                }, toDisplayString(tab.name), 3)
                              ]),
                              _: 2
                            }, 1032, ["aria-current"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(unref(TabPanels), { class: "pb-48 mt-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(MediaLibraryAttachment), {
                                onChange: onUpload,
                                name: "subject"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"${_scopeId4}><!--[-->`);
                              ssrRenderList(__props.media.data, (item) => {
                                _push5(`<div class="group cursor-pointer"${_scopeId4}><div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3"${_scopeId4}><img${ssrRenderAttr("src", item.url)} alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"${_scopeId4}></div><div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900"${_scopeId4}></div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode(unref(MediaLibraryAttachment), {
                                  onChange: onUpload,
                                  name: "subject"
                                }),
                                createVNode("div", { class: "mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.media.data, (item) => {
                                    return openBlock(), createBlock("div", {
                                      key: __props.media.url,
                                      onClick: ($event) => setSubject(item),
                                      class: "group cursor-pointer"
                                    }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                                        createVNode("img", {
                                          src: item.url,
                                          alt: "",
                                          class: "h-full w-full object-cover object-center group-hover:opacity-75"
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                                    ], 8, ["onClick"]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8"${_scopeId4}><div class="mx-auto max-w-2xl lg:max-w-none"${_scopeId4}><div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"${_scopeId4}><div class="aspect-w-1 aspect-h-1 w-full"${_scopeId4}><div${_scopeId4}>`);
                              if (unref(testMedia)) {
                                _push5(`<img${ssrRenderAttr("src", unref(testMedia))} alt="content_images" class="h-full w-full object-cover object-center sm:rounded-lg"${_scopeId4}>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div></div><div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"${_scopeId4}><div class="mt-6 flex flex-col items-center"${_scopeId4}><h3 class="text-lg text-gray-600 font-bold"${_scopeId4}>What category of test is this?</h3><h4 class="text-md text-gray-600 mt-1"${_scopeId4}>Each category tests different traits.</h4>`);
                              _push5(ssrRenderComponent(unref(RadioGroup), {
                                modelValue: unref(form).category,
                                "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                class: "mt-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(RadioGroupLabel), { class: "sr-only" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Choose Category `);
                                        } else {
                                          return [
                                            createTextVNode(" Choose Category ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="flex items-center justify-center"${_scopeId5}><!--[-->`);
                                    ssrRenderList(__props.categories, (category, index) => {
                                      _push6(ssrRenderComponent(unref(RadioGroupOption), {
                                        as: "template",
                                        class: ["border-gray-300 px-4 py-2", [
                                          index === 0 ? "border-l border-t border-b rounded-md" : "",
                                          index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                          index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                        ]],
                                        key: category.id,
                                        value: category
                                      }, {
                                        default: withCtx(({ active, checked }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"])}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(RadioGroupLabel), {
                                              as: "span",
                                              class: "text-xl"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="uppercase"${_scopeId7}>${ssrInterpolate(category.name)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", {
                                                      class: "uppercase",
                                                      textContent: toDisplayString(category.name)
                                                    }, null, 8, ["textContent"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", {
                                                      class: "uppercase",
                                                      textContent: toDisplayString(category.name)
                                                    }, null, 8, ["textContent"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ], 2)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]--></div>`);
                                  } else {
                                    return [
                                      createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Choose Category ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex items-center justify-center" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                                          return openBlock(), createBlock(unref(RadioGroupOption), {
                                            as: "template",
                                            class: ["border-gray-300 px-4 py-2", [
                                              index === 0 ? "border-l border-t border-b rounded-md" : "",
                                              index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                              index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                            ]],
                                            key: category.id,
                                            value: category
                                          }, {
                                            default: withCtx(({ active, checked }) => [
                                              createVNode("div", {
                                                class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", {
                                                      class: "uppercase",
                                                      textContent: toDisplayString(category.name)
                                                    }, null, 8, ["textContent"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ], 2)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "class"]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="mt-10 flex justify-center flex-col items-center"${_scopeId4}><div style="${ssrRenderStyle(Object.keys(unref(form).category).length !== 0 ? null : { display: "none" })}" class="flex items-center space-x-2"${_scopeId4}><span class="text-xl"${_scopeId4}>Traits:</span><ul class="flex items-center space-x-2 text-xl"${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(form).category.criterias, (trait, index) => {
                                _push5(`<li class="${ssrRenderClass([[
                                  index === 0 ? "text-green-500" : "",
                                  index === 1 ? "text-blue-500" : "",
                                  index === 2 ? "text-orange-500" : ""
                                ], "capitalize"])}"${_scopeId4}>${ssrInterpolate(index === unref(form).category.criterias.length - 1 ? trait.name : `${trait.name},`)}</li>`);
                              });
                              _push5(`<!--]--></ul></div><button class="mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"${_scopeId4}> Next </button></div></div></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                  createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                    createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                        createVNode("div", null, [
                                          unref(testMedia) ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: unref(testMedia),
                                            alt: "content_images",
                                            class: "h-full w-full object-cover object-center sm:rounded-lg"
                                          }, null, 8, ["src"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                        createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "What category of test is this?"),
                                          createVNode("h4", { class: "text-md text-gray-600 mt-1" }, "Each category tests different traits."),
                                          createVNode(unref(RadioGroup), {
                                            modelValue: unref(form).category,
                                            "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Choose Category ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "flex items-center justify-center" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                                                  return openBlock(), createBlock(unref(RadioGroupOption), {
                                                    as: "template",
                                                    class: ["border-gray-300 px-4 py-2", [
                                                      index === 0 ? "border-l border-t border-b rounded-md" : "",
                                                      index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                                      index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                                    ]],
                                                    key: category.id,
                                                    value: category
                                                  }, {
                                                    default: withCtx(({ active, checked }) => [
                                                      createVNode("div", {
                                                        class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                                      }, [
                                                        createVNode(unref(RadioGroupLabel), {
                                                          as: "span",
                                                          class: "text-xl"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", {
                                                              class: "uppercase",
                                                              textContent: toDisplayString(category.name)
                                                            }, null, 8, ["textContent"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ], 2)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value", "class"]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mt-10 flex justify-center flex-col items-center" }, [
                                          withDirectives(createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", { class: "text-xl" }, "Traits:"),
                                            createVNode("ul", { class: "flex items-center space-x-2 text-xl" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).category.criterias, (trait, index) => {
                                                return openBlock(), createBlock("li", {
                                                  textContent: toDisplayString(index === unref(form).category.criterias.length - 1 ? trait.name : `${trait.name},`),
                                                  class: ["capitalize", [
                                                    index === 0 ? "text-green-500" : "",
                                                    index === 1 ? "text-blue-500" : "",
                                                    index === 2 ? "text-orange-500" : ""
                                                  ]]
                                                }, null, 10, ["textContent"]);
                                              }), 256))
                                            ])
                                          ], 512), [
                                            [vShow, Object.keys(unref(form).category).length !== 0]
                                          ]),
                                          createVNode("button", {
                                            onClick: withModifiers(($event) => changeTab(2), ["prevent"]),
                                            class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                          }, " Next ", 8, ["onClick"])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8"${_scopeId4}><div class="mx-auto max-w-2xl lg:max-w-none"${_scopeId4}><div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"${_scopeId4}><div class="aspect-w-1 aspect-h-1 w-full"${_scopeId4}><span class="p-2 bg-gray-700 text-white uppercase w-full flex justify-center"${_scopeId4}>${ssrInterpolate(unref(form).category.name)}</span><div class="mt-2"${_scopeId4}>`);
                              if (unref(testMedia)) {
                                _push5(`<img${ssrRenderAttr("src", unref(testMedia))} alt="content_image" class="h-full w-full object-cover object-center sm:rounded-lg"${_scopeId4}>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div>`);
                              if (unref(form).options && unref(form).options.multiplePeople && unref(form).options.position !== void 0) {
                                _push5(`<div class="flex flex-col mt-4"${_scopeId4}><span class="text-lg font-bold"${_scopeId4}>Position</span><span${_scopeId4}>${ssrInterpolate(unref(form).options.position.name)}</span></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(form).options && unref(form).options.context) {
                                _push5(`<div class="flex flex-col mt-4"${_scopeId4}><span class="text-lg font-bold"${_scopeId4}>Title</span><span${_scopeId4}>${ssrInterpolate(unref(form).options.context)}</span></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(form).options && unref(form).options.gender) {
                                _push5(`<div class="flex flex-col mt-4"${_scopeId4}>`);
                                if (unref(form).options && unref(form).options.age) {
                                  _push5(`<div class="p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3"${_scopeId4}><span${_scopeId4}>Subject - </span><span${_scopeId4}>${ssrInterpolate(unref(form).options.age.id)}</span><span${_scopeId4}>/</span><span${_scopeId4}>${ssrInterpolate(unref(form).options.gender.name)}</span></div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div><div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"${_scopeId4}><div style="${ssrRenderStyle(unref(form).category.name === "Business" ? null : { display: "none" })}" class="mt-6 flex flex-col items-center"${_scopeId4}><h3 class="text-lg text-gray-600 font-bold"${_scopeId4}>Add Context</h3>`);
                              _push5(ssrRenderComponent(_sfc_main$4, {
                                for: "formOptions",
                                value: "What is your professional title?"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$5, {
                                ref: "formOptions",
                                modelValue: unref(form).options.context,
                                "onUpdate:modelValue": ($event) => unref(form).options.context = $event,
                                type: "text",
                                class: "mt-1 block w-3/4",
                                placeholder: "Vice President Marketing"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (unref(form).category.name === "Social") {
                                _push5(`<div class="mt-6 flex flex-col items-center"${_scopeId4}><h3 class="text-lg text-gray-600 font-bold"${_scopeId4}>How many people in this photo?</h3>`);
                                _push5(ssrRenderComponent(unref(RadioGroup), {
                                  modelValue: unref(form).options.multiplePeople,
                                  "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                  class: "mt-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(RadioGroupLabel), { class: "sr-only" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` How many people in this photo? `);
                                          } else {
                                            return [
                                              createTextVNode(" How many people in this photo? ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="flex flex-col items-center justify-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(unref(RadioGroupOption), {
                                        as: "span",
                                        class: "px-4 py-2",
                                        key: "one",
                                        value: "one",
                                        onClick: resetOptions
                                      }, {
                                        default: withCtx(({ active, checked }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([[
                                              unref(form).category,
                                              active && checked ? "bg-gray-300 ring-none" : "",
                                              !active && checked ? "bg-gray-300" : "",
                                              "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                            ], "rounded-lg p-3 border border-gray-500"])}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(RadioGroupLabel), {
                                              as: "span",
                                              class: "text-xl"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="uppercase"${_scopeId7}>One</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "uppercase" }, "One")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: [[
                                                  unref(form).category,
                                                  active && checked ? "bg-gray-300 ring-none" : "",
                                                  !active && checked ? "bg-gray-300" : "",
                                                  "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                ], "rounded-lg p-3 border border-gray-500"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "uppercase" }, "One")
                                                  ]),
                                                  _: 1
                                                })
                                              ], 2)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(RadioGroupOption), {
                                        as: "span",
                                        class: "px-4 py-2",
                                        key: "multiple",
                                        value: true
                                      }, {
                                        default: withCtx(({ active, checked }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([[
                                              unref(form).category,
                                              active && checked ? "bg-gray-300 ring-none" : "",
                                              !active && checked ? "bg-gray-300" : "",
                                              "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                            ], "rounded-lg p-3 border border-gray-500"])}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(RadioGroupLabel), {
                                              as: "span",
                                              class: "text-xl"
                                            }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="uppercase"${_scopeId7}>Multiple</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "uppercase" }, "Multiple")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: [[
                                                  unref(form).category,
                                                  active && checked ? "bg-gray-300 ring-none" : "",
                                                  !active && checked ? "bg-gray-300" : "",
                                                  "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                ], "rounded-lg p-3 border border-gray-500"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "uppercase" }, "Multiple")
                                                  ]),
                                                  _: 1
                                                })
                                              ], 2)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" How many people in this photo? ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                                          createVNode(unref(RadioGroupOption), {
                                            as: "span",
                                            class: "px-4 py-2",
                                            key: "one",
                                            value: "one",
                                            onClick: resetOptions
                                          }, {
                                            default: withCtx(({ active, checked }) => [
                                              createVNode("div", {
                                                class: [[
                                                  unref(form).category,
                                                  active && checked ? "bg-gray-300 ring-none" : "",
                                                  !active && checked ? "bg-gray-300" : "",
                                                  "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                ], "rounded-lg p-3 border border-gray-500"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "uppercase" }, "One")
                                                  ]),
                                                  _: 1
                                                })
                                              ], 2)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(RadioGroupOption), {
                                            as: "span",
                                            class: "px-4 py-2",
                                            key: "multiple",
                                            value: true
                                          }, {
                                            default: withCtx(({ active, checked }) => [
                                              createVNode("div", {
                                                class: [[
                                                  unref(form).category,
                                                  active && checked ? "bg-gray-300 ring-none" : "",
                                                  !active && checked ? "bg-gray-300" : "",
                                                  "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                ], "rounded-lg p-3 border border-gray-500"]
                                              }, [
                                                createVNode(unref(RadioGroupLabel), {
                                                  as: "span",
                                                  class: "text-xl"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "uppercase" }, "Multiple")
                                                  ]),
                                                  _: 1
                                                })
                                              ], 2)
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                if (unref(form).options.multiplePeople) {
                                  _push5(ssrRenderComponent(_sfc_main$1, {
                                    modelValue: unref(form).options.position,
                                    "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                    message: unref(form).errors.options,
                                    label: "Choose One",
                                    options: [
                                      { id: 1, name: "The one on the left" },
                                      { id: 2, name: "The one in the center" },
                                      { id: 3, name: "The one on the right" }
                                    ]
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(form).category.name === "Dating") {
                                _push5(`<div class="mt-6 flex flex-col items-center w-full"${_scopeId4}><h3 class="text-lg text-gray-600 font-bold"${_scopeId4}>Who is in the photo?</h3><div class="flex space-x-4 w-full"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_sfc_main$1, {
                                  class: "w-full",
                                  modelValue: unref(form).options.gender,
                                  "onUpdate:modelValue": ($event) => unref(form).options.gender = $event,
                                  message: unref(form).errors.options,
                                  label: "Cender",
                                  options: [
                                    { id: 1, name: "Male" },
                                    { id: 2, name: "Female" }
                                  ]
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_sfc_main$1, {
                                  modelValue: unref(form).options.age,
                                  "onUpdate:modelValue": ($event) => unref(form).options.age = $event,
                                  message: unref(form).errors.options,
                                  label: "Age",
                                  options: unref(allowedAges)
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="mt-4"${_scopeId4}><div class="flex flex-col space-y-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(SwitchGroup), {
                                  as: "div",
                                  class: "flex items-center"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Switch), {
                                        modelValue: unref(form).options.multiplePeople,
                                        "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                        class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span aria-hidden="true" class="${ssrRenderClass([unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])}"${_scopeId6}></span>`);
                                          } else {
                                            return [
                                              createVNode("span", {
                                                "aria-hidden": "true",
                                                class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                              }, null, 2)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(SwitchLabel), {
                                        as: "span",
                                        class: "ml-3"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class="text-sm font-medium text-gray-900"${_scopeId6}>This photo has multiple people</span>`);
                                          } else {
                                            return [
                                              createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(Switch), {
                                          modelValue: unref(form).options.multiplePeople,
                                          "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                          class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              "aria-hidden": "true",
                                              class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                            }, null, 2)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                        createVNode(unref(SwitchLabel), {
                                          as: "span",
                                          class: "ml-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                if (unref(form).options.multiplePeople) {
                                  _push5(ssrRenderComponent(_sfc_main$1, {
                                    modelValue: unref(form).options.position,
                                    "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                    message: unref(form).errors.options,
                                    label: "Choose One",
                                    options: [
                                      { id: 1, name: "The one on the left" },
                                      { id: 2, name: "The one in the center" },
                                      { id: 3, name: "The one on the right" }
                                    ]
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="mt-4 flex justify-center flex-col items-center"${_scopeId4}><button type="submit" class="mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"${_scopeId4}> Start </button></div><div style="${ssrRenderStyle(unref(form).hasErrors ? null : { display: "none" })}" class="mt-4 bg-red-300 border-red-600 p-4 rounded-md"${_scopeId4}><ul class="list-disc px-2"${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(form).errors, (error) => {
                                _push5(`<li class="text-red-900"${_scopeId4}>${ssrInterpolate(error)}</li>`);
                              });
                              _push5(`<!--]--></ul></div></div></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                  createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                    createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).category.name),
                                          class: "p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                        }, null, 8, ["textContent"]),
                                        createVNode("div", { class: "mt-2" }, [
                                          unref(testMedia) ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: unref(testMedia),
                                            alt: "content_image",
                                            class: "h-full w-full object-cover object-center sm:rounded-lg"
                                          }, null, 8, ["src"])) : createCommentVNode("", true)
                                        ]),
                                        unref(form).options && unref(form).options.multiplePeople && unref(form).options.position !== void 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          createVNode("span", { class: "text-lg font-bold" }, "Position"),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.position.name)
                                          }, null, 8, ["textContent"])
                                        ])) : createCommentVNode("", true),
                                        unref(form).options && unref(form).options.context ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          createVNode("span", { class: "text-lg font-bold" }, "Title"),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.context)
                                          }, null, 8, ["textContent"])
                                        ])) : createCommentVNode("", true),
                                        unref(form).options && unref(form).options.gender ? (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          unref(form).options && unref(form).options.age ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3"
                                          }, [
                                            createVNode("span", null, "Subject - "),
                                            createVNode("span", {
                                              textContent: toDisplayString(unref(form).options.age.id)
                                            }, null, 8, ["textContent"]),
                                            createVNode("span", null, "/"),
                                            createVNode("span", {
                                              textContent: toDisplayString(unref(form).options.gender.name)
                                            }, null, 8, ["textContent"])
                                          ])) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                        withDirectives(createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Add Context"),
                                          createVNode(_sfc_main$4, {
                                            for: "formOptions",
                                            value: "What is your professional title?"
                                          }),
                                          createVNode(_sfc_main$5, {
                                            ref: "formOptions",
                                            modelValue: unref(form).options.context,
                                            "onUpdate:modelValue": ($event) => unref(form).options.context = $event,
                                            type: "text",
                                            class: "mt-1 block w-3/4",
                                            placeholder: "Vice President Marketing"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ], 512), [
                                          [vShow, unref(form).category.name === "Business"]
                                        ]),
                                        unref(form).category.name === "Social" ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mt-6 flex flex-col items-center"
                                        }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "How many people in this photo?"),
                                          createVNode(unref(RadioGroup), {
                                            modelValue: unref(form).options.multiplePeople,
                                            "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" How many people in this photo? ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                                                createVNode(unref(RadioGroupOption), {
                                                  as: "span",
                                                  class: "px-4 py-2",
                                                  key: "one",
                                                  value: "one",
                                                  onClick: resetOptions
                                                }, {
                                                  default: withCtx(({ active, checked }) => [
                                                    createVNode("div", {
                                                      class: [[
                                                        unref(form).category,
                                                        active && checked ? "bg-gray-300 ring-none" : "",
                                                        !active && checked ? "bg-gray-300" : "",
                                                        "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                      ], "rounded-lg p-3 border border-gray-500"]
                                                    }, [
                                                      createVNode(unref(RadioGroupLabel), {
                                                        as: "span",
                                                        class: "text-xl"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "uppercase" }, "One")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(RadioGroupOption), {
                                                  as: "span",
                                                  class: "px-4 py-2",
                                                  key: "multiple",
                                                  value: true
                                                }, {
                                                  default: withCtx(({ active, checked }) => [
                                                    createVNode("div", {
                                                      class: [[
                                                        unref(form).category,
                                                        active && checked ? "bg-gray-300 ring-none" : "",
                                                        !active && checked ? "bg-gray-300" : "",
                                                        "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                      ], "rounded-lg p-3 border border-gray-500"]
                                                    }, [
                                                      createVNode(unref(RadioGroupLabel), {
                                                        as: "span",
                                                        class: "text-xl"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "uppercase" }, "Multiple")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                            key: 0,
                                            modelValue: unref(form).options.position,
                                            "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                            message: unref(form).errors.options,
                                            label: "Choose One",
                                            options: [
                                              { id: 1, name: "The one on the left" },
                                              { id: 2, name: "The one in the center" },
                                              { id: 3, name: "The one on the right" }
                                            ]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true),
                                        unref(form).category.name === "Dating" ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mt-6 flex flex-col items-center w-full"
                                        }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Who is in the photo?"),
                                          createVNode("div", { class: "flex space-x-4 w-full" }, [
                                            createVNode(_sfc_main$1, {
                                              class: "w-full",
                                              modelValue: unref(form).options.gender,
                                              "onUpdate:modelValue": ($event) => unref(form).options.gender = $event,
                                              message: unref(form).errors.options,
                                              label: "Cender",
                                              options: [
                                                { id: 1, name: "Male" },
                                                { id: 2, name: "Female" }
                                              ]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "message"]),
                                            createVNode(_sfc_main$1, {
                                              modelValue: unref(form).options.age,
                                              "onUpdate:modelValue": ($event) => unref(form).options.age = $event,
                                              message: unref(form).errors.options,
                                              label: "Age",
                                              options: unref(allowedAges)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "message", "options"])
                                          ]),
                                          createVNode("div", { class: "mt-4" }, [
                                            createVNode("div", { class: "flex flex-col space-y-4" }, [
                                              createVNode(unref(SwitchGroup), {
                                                as: "div",
                                                class: "flex items-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Switch), {
                                                    modelValue: unref(form).options.multiplePeople,
                                                    "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                                    class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", {
                                                        "aria-hidden": "true",
                                                        class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                                      }, null, 2)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(unref(SwitchLabel), {
                                                    as: "span",
                                                    class: "ml-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                                key: 0,
                                                modelValue: unref(form).options.position,
                                                "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                                message: unref(form).errors.options,
                                                label: "Choose One",
                                                options: [
                                                  { id: 1, name: "The one on the left" },
                                                  { id: 2, name: "The one in the center" },
                                                  { id: 3, name: "The one on the right" }
                                                ]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "mt-4 flex justify-center flex-col items-center" }, [
                                          createVNode("button", {
                                            type: "submit",
                                            class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                          }, " Start ")
                                        ]),
                                        withDirectives(createVNode("div", { class: "mt-4 bg-red-300 border-red-600 p-4 rounded-md" }, [
                                          createVNode("ul", { class: "list-disc px-2" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).errors, (error) => {
                                              return openBlock(), createBlock("li", {
                                                class: "text-red-900",
                                                textContent: toDisplayString(error)
                                              }, null, 8, ["textContent"]);
                                            }), 256))
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).hasErrors]
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(({ selected }) => [
                              createVNode(unref(MediaLibraryAttachment), {
                                onChange: onUpload,
                                name: "subject"
                              }),
                              createVNode("div", { class: "mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.media.data, (item) => {
                                  return openBlock(), createBlock("div", {
                                    key: __props.media.url,
                                    onClick: ($event) => setSubject(item),
                                    class: "group cursor-pointer"
                                  }, [
                                    createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                                      createVNode("img", {
                                        src: item.url,
                                        alt: "",
                                        class: "h-full w-full object-cover object-center group-hover:opacity-75"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                                  ], 8, ["onClick"]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                  createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                    createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                      createVNode("div", null, [
                                        unref(testMedia) ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: unref(testMedia),
                                          alt: "content_images",
                                          class: "h-full w-full object-cover object-center sm:rounded-lg"
                                        }, null, 8, ["src"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                      createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                        createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "What category of test is this?"),
                                        createVNode("h4", { class: "text-md text-gray-600 mt-1" }, "Each category tests different traits."),
                                        createVNode(unref(RadioGroup), {
                                          modelValue: unref(form).category,
                                          "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                          class: "mt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Choose Category ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "flex items-center justify-center" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                                                return openBlock(), createBlock(unref(RadioGroupOption), {
                                                  as: "template",
                                                  class: ["border-gray-300 px-4 py-2", [
                                                    index === 0 ? "border-l border-t border-b rounded-md" : "",
                                                    index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                                    index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                                  ]],
                                                  key: category.id,
                                                  value: category
                                                }, {
                                                  default: withCtx(({ active, checked }) => [
                                                    createVNode("div", {
                                                      class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                                    }, [
                                                      createVNode(unref(RadioGroupLabel), {
                                                        as: "span",
                                                        class: "text-xl"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", {
                                                            class: "uppercase",
                                                            textContent: toDisplayString(category.name)
                                                          }, null, 8, ["textContent"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ], 2)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value", "class"]);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mt-10 flex justify-center flex-col items-center" }, [
                                        withDirectives(createVNode("div", { class: "flex items-center space-x-2" }, [
                                          createVNode("span", { class: "text-xl" }, "Traits:"),
                                          createVNode("ul", { class: "flex items-center space-x-2 text-xl" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).category.criterias, (trait, index) => {
                                              return openBlock(), createBlock("li", {
                                                textContent: toDisplayString(index === unref(form).category.criterias.length - 1 ? trait.name : `${trait.name},`),
                                                class: ["capitalize", [
                                                  index === 0 ? "text-green-500" : "",
                                                  index === 1 ? "text-blue-500" : "",
                                                  index === 2 ? "text-orange-500" : ""
                                                ]]
                                              }, null, 10, ["textContent"]);
                                            }), 256))
                                          ])
                                        ], 512), [
                                          [vShow, Object.keys(unref(form).category).length !== 0]
                                        ]),
                                        createVNode("button", {
                                          onClick: withModifiers(($event) => changeTab(2), ["prevent"]),
                                          class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        }, " Next ", 8, ["onClick"])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                  createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                    createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                      createVNode("span", {
                                        textContent: toDisplayString(unref(form).category.name),
                                        class: "p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                      }, null, 8, ["textContent"]),
                                      createVNode("div", { class: "mt-2" }, [
                                        unref(testMedia) ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: unref(testMedia),
                                          alt: "content_image",
                                          class: "h-full w-full object-cover object-center sm:rounded-lg"
                                        }, null, 8, ["src"])) : createCommentVNode("", true)
                                      ]),
                                      unref(form).options && unref(form).options.multiplePeople && unref(form).options.position !== void 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex flex-col mt-4"
                                      }, [
                                        createVNode("span", { class: "text-lg font-bold" }, "Position"),
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).options.position.name)
                                        }, null, 8, ["textContent"])
                                      ])) : createCommentVNode("", true),
                                      unref(form).options && unref(form).options.context ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex flex-col mt-4"
                                      }, [
                                        createVNode("span", { class: "text-lg font-bold" }, "Title"),
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).options.context)
                                        }, null, 8, ["textContent"])
                                      ])) : createCommentVNode("", true),
                                      unref(form).options && unref(form).options.gender ? (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex flex-col mt-4"
                                      }, [
                                        unref(form).options && unref(form).options.age ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3"
                                        }, [
                                          createVNode("span", null, "Subject - "),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.age.id)
                                          }, null, 8, ["textContent"]),
                                          createVNode("span", null, "/"),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.gender.name)
                                          }, null, 8, ["textContent"])
                                        ])) : createCommentVNode("", true)
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                      withDirectives(createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                        createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Add Context"),
                                        createVNode(_sfc_main$4, {
                                          for: "formOptions",
                                          value: "What is your professional title?"
                                        }),
                                        createVNode(_sfc_main$5, {
                                          ref: "formOptions",
                                          modelValue: unref(form).options.context,
                                          "onUpdate:modelValue": ($event) => unref(form).options.context = $event,
                                          type: "text",
                                          class: "mt-1 block w-3/4",
                                          placeholder: "Vice President Marketing"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ], 512), [
                                        [vShow, unref(form).category.name === "Business"]
                                      ]),
                                      unref(form).category.name === "Social" ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "mt-6 flex flex-col items-center"
                                      }, [
                                        createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "How many people in this photo?"),
                                        createVNode(unref(RadioGroup), {
                                          modelValue: unref(form).options.multiplePeople,
                                          "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                          class: "mt-4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" How many people in this photo? ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                                              createVNode(unref(RadioGroupOption), {
                                                as: "span",
                                                class: "px-4 py-2",
                                                key: "one",
                                                value: "one",
                                                onClick: resetOptions
                                              }, {
                                                default: withCtx(({ active, checked }) => [
                                                  createVNode("div", {
                                                    class: [[
                                                      unref(form).category,
                                                      active && checked ? "bg-gray-300 ring-none" : "",
                                                      !active && checked ? "bg-gray-300" : "",
                                                      "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                    ], "rounded-lg p-3 border border-gray-500"]
                                                  }, [
                                                    createVNode(unref(RadioGroupLabel), {
                                                      as: "span",
                                                      class: "text-xl"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "uppercase" }, "One")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(RadioGroupOption), {
                                                as: "span",
                                                class: "px-4 py-2",
                                                key: "multiple",
                                                value: true
                                              }, {
                                                default: withCtx(({ active, checked }) => [
                                                  createVNode("div", {
                                                    class: [[
                                                      unref(form).category,
                                                      active && checked ? "bg-gray-300 ring-none" : "",
                                                      !active && checked ? "bg-gray-300" : "",
                                                      "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                    ], "rounded-lg p-3 border border-gray-500"]
                                                  }, [
                                                    createVNode(unref(RadioGroupLabel), {
                                                      as: "span",
                                                      class: "text-xl"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "uppercase" }, "Multiple")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ], 2)
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                          key: 0,
                                          modelValue: unref(form).options.position,
                                          "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                          message: unref(form).errors.options,
                                          label: "Choose One",
                                          options: [
                                            { id: 1, name: "The one on the left" },
                                            { id: 2, name: "The one in the center" },
                                            { id: 3, name: "The one on the right" }
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                      ])) : createCommentVNode("", true),
                                      unref(form).category.name === "Dating" ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "mt-6 flex flex-col items-center w-full"
                                      }, [
                                        createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Who is in the photo?"),
                                        createVNode("div", { class: "flex space-x-4 w-full" }, [
                                          createVNode(_sfc_main$1, {
                                            class: "w-full",
                                            modelValue: unref(form).options.gender,
                                            "onUpdate:modelValue": ($event) => unref(form).options.gender = $event,
                                            message: unref(form).errors.options,
                                            label: "Cender",
                                            options: [
                                              { id: 1, name: "Male" },
                                              { id: 2, name: "Female" }
                                            ]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "message"]),
                                          createVNode(_sfc_main$1, {
                                            modelValue: unref(form).options.age,
                                            "onUpdate:modelValue": ($event) => unref(form).options.age = $event,
                                            message: unref(form).errors.options,
                                            label: "Age",
                                            options: unref(allowedAges)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "message", "options"])
                                        ]),
                                        createVNode("div", { class: "mt-4" }, [
                                          createVNode("div", { class: "flex flex-col space-y-4" }, [
                                            createVNode(unref(SwitchGroup), {
                                              as: "div",
                                              class: "flex items-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Switch), {
                                                  modelValue: unref(form).options.multiplePeople,
                                                  "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                                  class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", {
                                                      "aria-hidden": "true",
                                                      class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                                    }, null, 2)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                                createVNode(unref(SwitchLabel), {
                                                  as: "span",
                                                  class: "ml-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                              key: 0,
                                              modelValue: unref(form).options.position,
                                              "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                              message: unref(form).errors.options,
                                              label: "Choose One",
                                              options: [
                                                { id: 1, name: "The one on the left" },
                                                { id: 2, name: "The one in the center" },
                                                { id: 3, name: "The one on the right" }
                                              ]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ])) : createCommentVNode("", true),
                                      createVNode("div", { class: "mt-4 flex justify-center flex-col items-center" }, [
                                        createVNode("button", {
                                          type: "submit",
                                          class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        }, " Start ")
                                      ]),
                                      withDirectives(createVNode("div", { class: "mt-4 bg-red-300 border-red-600 p-4 rounded-md" }, [
                                        createVNode("ul", { class: "list-disc px-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).errors, (error) => {
                                            return openBlock(), createBlock("li", {
                                              class: "text-red-900",
                                              textContent: toDisplayString(error)
                                            }, null, 8, ["textContent"]);
                                          }), 256))
                                        ])
                                      ], 512), [
                                        [vShow, unref(form).hasErrors]
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "border-b border-gray-200" }, [
                      createVNode("div", { class: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" }, [
                        createVNode(unref(TabList), { class: "mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                              return createVNode(unref(Tab), {
                                as: "template",
                                key: tab.name,
                                "aria-current": tab.selected ? tab.name : ""
                              }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    type: "button",
                                    class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                  }, toDisplayString(tab.name), 3)
                                ]),
                                _: 2
                              }, 1032, ["aria-current"]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(unref(TabPanels), { class: "pb-48 mt-8" }, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(({ selected }) => [
                            createVNode(unref(MediaLibraryAttachment), {
                              onChange: onUpload,
                              name: "subject"
                            }),
                            createVNode("div", { class: "mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.media.data, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: __props.media.url,
                                  onClick: ($event) => setSubject(item),
                                  class: "group cursor-pointer"
                                }, [
                                  createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                                    createVNode("img", {
                                      src: item.url,
                                      alt: "",
                                      class: "h-full w-full object-cover object-center group-hover:opacity-75"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                                ], 8, ["onClick"]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                              createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                  createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                    createVNode("div", null, [
                                      unref(testMedia) ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: unref(testMedia),
                                        alt: "content_images",
                                        class: "h-full w-full object-cover object-center sm:rounded-lg"
                                      }, null, 8, ["src"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                    createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                      createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "What category of test is this?"),
                                      createVNode("h4", { class: "text-md text-gray-600 mt-1" }, "Each category tests different traits."),
                                      createVNode(unref(RadioGroup), {
                                        modelValue: unref(form).category,
                                        "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                        class: "mt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Choose Category ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "flex items-center justify-center" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                                              return openBlock(), createBlock(unref(RadioGroupOption), {
                                                as: "template",
                                                class: ["border-gray-300 px-4 py-2", [
                                                  index === 0 ? "border-l border-t border-b rounded-md" : "",
                                                  index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                                  index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                                ]],
                                                key: category.id,
                                                value: category
                                              }, {
                                                default: withCtx(({ active, checked }) => [
                                                  createVNode("div", {
                                                    class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                                  }, [
                                                    createVNode(unref(RadioGroupLabel), {
                                                      as: "span",
                                                      class: "text-xl"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", {
                                                          class: "uppercase",
                                                          textContent: toDisplayString(category.name)
                                                        }, null, 8, ["textContent"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ], 2)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "class"]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mt-10 flex justify-center flex-col items-center" }, [
                                      withDirectives(createVNode("div", { class: "flex items-center space-x-2" }, [
                                        createVNode("span", { class: "text-xl" }, "Traits:"),
                                        createVNode("ul", { class: "flex items-center space-x-2 text-xl" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).category.criterias, (trait, index) => {
                                            return openBlock(), createBlock("li", {
                                              textContent: toDisplayString(index === unref(form).category.criterias.length - 1 ? trait.name : `${trait.name},`),
                                              class: ["capitalize", [
                                                index === 0 ? "text-green-500" : "",
                                                index === 1 ? "text-blue-500" : "",
                                                index === 2 ? "text-orange-500" : ""
                                              ]]
                                            }, null, 10, ["textContent"]);
                                          }), 256))
                                        ])
                                      ], 512), [
                                        [vShow, Object.keys(unref(form).category).length !== 0]
                                      ]),
                                      createVNode("button", {
                                        onClick: withModifiers(($event) => changeTab(2), ["prevent"]),
                                        class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                      }, " Next ", 8, ["onClick"])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                              createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                  createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                    createVNode("span", {
                                      textContent: toDisplayString(unref(form).category.name),
                                      class: "p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                    }, null, 8, ["textContent"]),
                                    createVNode("div", { class: "mt-2" }, [
                                      unref(testMedia) ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: unref(testMedia),
                                        alt: "content_image",
                                        class: "h-full w-full object-cover object-center sm:rounded-lg"
                                      }, null, 8, ["src"])) : createCommentVNode("", true)
                                    ]),
                                    unref(form).options && unref(form).options.multiplePeople && unref(form).options.position !== void 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex flex-col mt-4"
                                    }, [
                                      createVNode("span", { class: "text-lg font-bold" }, "Position"),
                                      createVNode("span", {
                                        textContent: toDisplayString(unref(form).options.position.name)
                                      }, null, 8, ["textContent"])
                                    ])) : createCommentVNode("", true),
                                    unref(form).options && unref(form).options.context ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex flex-col mt-4"
                                    }, [
                                      createVNode("span", { class: "text-lg font-bold" }, "Title"),
                                      createVNode("span", {
                                        textContent: toDisplayString(unref(form).options.context)
                                      }, null, 8, ["textContent"])
                                    ])) : createCommentVNode("", true),
                                    unref(form).options && unref(form).options.gender ? (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex flex-col mt-4"
                                    }, [
                                      unref(form).options && unref(form).options.age ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3"
                                      }, [
                                        createVNode("span", null, "Subject - "),
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).options.age.id)
                                        }, null, 8, ["textContent"]),
                                        createVNode("span", null, "/"),
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).options.gender.name)
                                        }, null, 8, ["textContent"])
                                      ])) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                    withDirectives(createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                      createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Add Context"),
                                      createVNode(_sfc_main$4, {
                                        for: "formOptions",
                                        value: "What is your professional title?"
                                      }),
                                      createVNode(_sfc_main$5, {
                                        ref: "formOptions",
                                        modelValue: unref(form).options.context,
                                        "onUpdate:modelValue": ($event) => unref(form).options.context = $event,
                                        type: "text",
                                        class: "mt-1 block w-3/4",
                                        placeholder: "Vice President Marketing"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 512), [
                                      [vShow, unref(form).category.name === "Business"]
                                    ]),
                                    unref(form).category.name === "Social" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mt-6 flex flex-col items-center"
                                    }, [
                                      createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "How many people in this photo?"),
                                      createVNode(unref(RadioGroup), {
                                        modelValue: unref(form).options.multiplePeople,
                                        "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                        class: "mt-4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" How many people in this photo? ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                                            createVNode(unref(RadioGroupOption), {
                                              as: "span",
                                              class: "px-4 py-2",
                                              key: "one",
                                              value: "one",
                                              onClick: resetOptions
                                            }, {
                                              default: withCtx(({ active, checked }) => [
                                                createVNode("div", {
                                                  class: [[
                                                    unref(form).category,
                                                    active && checked ? "bg-gray-300 ring-none" : "",
                                                    !active && checked ? "bg-gray-300" : "",
                                                    "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                  ], "rounded-lg p-3 border border-gray-500"]
                                                }, [
                                                  createVNode(unref(RadioGroupLabel), {
                                                    as: "span",
                                                    class: "text-xl"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "uppercase" }, "One")
                                                    ]),
                                                    _: 1
                                                  })
                                                ], 2)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(RadioGroupOption), {
                                              as: "span",
                                              class: "px-4 py-2",
                                              key: "multiple",
                                              value: true
                                            }, {
                                              default: withCtx(({ active, checked }) => [
                                                createVNode("div", {
                                                  class: [[
                                                    unref(form).category,
                                                    active && checked ? "bg-gray-300 ring-none" : "",
                                                    !active && checked ? "bg-gray-300" : "",
                                                    "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                  ], "rounded-lg p-3 border border-gray-500"]
                                                }, [
                                                  createVNode(unref(RadioGroupLabel), {
                                                    as: "span",
                                                    class: "text-xl"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "uppercase" }, "Multiple")
                                                    ]),
                                                    _: 1
                                                  })
                                                ], 2)
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                        key: 0,
                                        modelValue: unref(form).options.position,
                                        "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                        message: unref(form).errors.options,
                                        label: "Choose One",
                                        options: [
                                          { id: 1, name: "The one on the left" },
                                          { id: 2, name: "The one in the center" },
                                          { id: 3, name: "The one on the right" }
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true),
                                    unref(form).category.name === "Dating" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "mt-6 flex flex-col items-center w-full"
                                    }, [
                                      createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Who is in the photo?"),
                                      createVNode("div", { class: "flex space-x-4 w-full" }, [
                                        createVNode(_sfc_main$1, {
                                          class: "w-full",
                                          modelValue: unref(form).options.gender,
                                          "onUpdate:modelValue": ($event) => unref(form).options.gender = $event,
                                          message: unref(form).errors.options,
                                          label: "Cender",
                                          options: [
                                            { id: 1, name: "Male" },
                                            { id: 2, name: "Female" }
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "message"]),
                                        createVNode(_sfc_main$1, {
                                          modelValue: unref(form).options.age,
                                          "onUpdate:modelValue": ($event) => unref(form).options.age = $event,
                                          message: unref(form).errors.options,
                                          label: "Age",
                                          options: unref(allowedAges)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "message", "options"])
                                      ]),
                                      createVNode("div", { class: "mt-4" }, [
                                        createVNode("div", { class: "flex flex-col space-y-4" }, [
                                          createVNode(unref(SwitchGroup), {
                                            as: "div",
                                            class: "flex items-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Switch), {
                                                modelValue: unref(form).options.multiplePeople,
                                                "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                                class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", {
                                                    "aria-hidden": "true",
                                                    class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                                  }, null, 2)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                              createVNode(unref(SwitchLabel), {
                                                as: "span",
                                                class: "ml-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                            key: 0,
                                            modelValue: unref(form).options.position,
                                            "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                            message: unref(form).errors.options,
                                            label: "Choose One",
                                            options: [
                                              { id: 1, name: "The one on the left" },
                                              { id: 2, name: "The one in the center" },
                                              { id: 3, name: "The one on the right" }
                                            ]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "mt-4 flex justify-center flex-col items-center" }, [
                                      createVNode("button", {
                                        type: "submit",
                                        class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                      }, " Start ")
                                    ]),
                                    withDirectives(createVNode("div", { class: "mt-4 bg-red-300 border-red-600 p-4 rounded-md" }, [
                                      createVNode("ul", { class: "list-disc px-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).errors, (error) => {
                                          return openBlock(), createBlock("li", {
                                            class: "text-red-900",
                                            textContent: toDisplayString(error)
                                          }, null, 8, ["textContent"]);
                                        }), 256))
                                      ])
                                    ], 512), [
                                      [vShow, unref(form).hasErrors]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" }, [
                createVNode("div", { class: "bg-white rounded-md p-4" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => unref(form).post(_ctx.route("subjects.index")), ["prevent"])
                  }, [
                    createVNode(unref(TabGroup), {
                      defaultIndex: 0,
                      selectedIndex: selectedTab.value,
                      onChange: changeTab
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-b border-gray-200" }, [
                          createVNode("div", { class: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" }, [
                            createVNode(unref(TabList), { class: "mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                                  return createVNode(unref(Tab), {
                                    as: "template",
                                    key: tab.name,
                                    "aria-current": tab.selected ? tab.name : ""
                                  }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        type: "button",
                                        class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                      }, toDisplayString(tab.name), 3)
                                    ]),
                                    _: 2
                                  }, 1032, ["aria-current"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode(unref(TabPanels), { class: "pb-48 mt-8" }, {
                          default: withCtx(() => [
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(({ selected }) => [
                                createVNode(unref(MediaLibraryAttachment), {
                                  onChange: onUpload,
                                  name: "subject"
                                }),
                                createVNode("div", { class: "mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.media.data, (item) => {
                                    return openBlock(), createBlock("div", {
                                      key: __props.media.url,
                                      onClick: ($event) => setSubject(item),
                                      class: "group cursor-pointer"
                                    }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                                        createVNode("img", {
                                          src: item.url,
                                          alt: "",
                                          class: "h-full w-full object-cover object-center group-hover:opacity-75"
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                                    ], 8, ["onClick"]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                  createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                    createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                        createVNode("div", null, [
                                          unref(testMedia) ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: unref(testMedia),
                                            alt: "content_images",
                                            class: "h-full w-full object-cover object-center sm:rounded-lg"
                                          }, null, 8, ["src"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                        createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "What category of test is this?"),
                                          createVNode("h4", { class: "text-md text-gray-600 mt-1" }, "Each category tests different traits."),
                                          createVNode(unref(RadioGroup), {
                                            modelValue: unref(form).category,
                                            "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Choose Category ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "flex items-center justify-center" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                                                  return openBlock(), createBlock(unref(RadioGroupOption), {
                                                    as: "template",
                                                    class: ["border-gray-300 px-4 py-2", [
                                                      index === 0 ? "border-l border-t border-b rounded-md" : "",
                                                      index !== 0 && index !== __props.categories.length - 1 ? "border" : "",
                                                      index === __props.categories.length - 1 ? "border-r rounded-md border-t border-b" : ""
                                                    ]],
                                                    key: category.id,
                                                    value: category
                                                  }, {
                                                    default: withCtx(({ active, checked }) => [
                                                      createVNode("div", {
                                                        class: [unref(form).category, active && checked ? "bg-gray-300 ring-none" : "", !active && checked ? "bg-gray-300" : "", "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"]
                                                      }, [
                                                        createVNode(unref(RadioGroupLabel), {
                                                          as: "span",
                                                          class: "text-xl"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", {
                                                              class: "uppercase",
                                                              textContent: toDisplayString(category.name)
                                                            }, null, 8, ["textContent"])
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ], 2)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value", "class"]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mt-10 flex justify-center flex-col items-center" }, [
                                          withDirectives(createVNode("div", { class: "flex items-center space-x-2" }, [
                                            createVNode("span", { class: "text-xl" }, "Traits:"),
                                            createVNode("ul", { class: "flex items-center space-x-2 text-xl" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).category.criterias, (trait, index) => {
                                                return openBlock(), createBlock("li", {
                                                  textContent: toDisplayString(index === unref(form).category.criterias.length - 1 ? trait.name : `${trait.name},`),
                                                  class: ["capitalize", [
                                                    index === 0 ? "text-green-500" : "",
                                                    index === 1 ? "text-blue-500" : "",
                                                    index === 2 ? "text-orange-500" : ""
                                                  ]]
                                                }, null, 10, ["textContent"]);
                                              }), 256))
                                            ])
                                          ], 512), [
                                            [vShow, Object.keys(unref(form).category).length !== 0]
                                          ]),
                                          createVNode("button", {
                                            onClick: withModifiers(($event) => changeTab(2), ["prevent"]),
                                            class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                          }, " Next ", 8, ["onClick"])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8" }, [
                                  createVNode("div", { class: "mx-auto max-w-2xl lg:max-w-none" }, [
                                    createVNode("div", { class: "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" }, [
                                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                                        createVNode("span", {
                                          textContent: toDisplayString(unref(form).category.name),
                                          class: "p-2 bg-gray-700 text-white uppercase w-full flex justify-center"
                                        }, null, 8, ["textContent"]),
                                        createVNode("div", { class: "mt-2" }, [
                                          unref(testMedia) ? (openBlock(), createBlock("img", {
                                            key: 0,
                                            src: unref(testMedia),
                                            alt: "content_image",
                                            class: "h-full w-full object-cover object-center sm:rounded-lg"
                                          }, null, 8, ["src"])) : createCommentVNode("", true)
                                        ]),
                                        unref(form).options && unref(form).options.multiplePeople && unref(form).options.position !== void 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          createVNode("span", { class: "text-lg font-bold" }, "Position"),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.position.name)
                                          }, null, 8, ["textContent"])
                                        ])) : createCommentVNode("", true),
                                        unref(form).options && unref(form).options.context ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          createVNode("span", { class: "text-lg font-bold" }, "Title"),
                                          createVNode("span", {
                                            textContent: toDisplayString(unref(form).options.context)
                                          }, null, 8, ["textContent"])
                                        ])) : createCommentVNode("", true),
                                        unref(form).options && unref(form).options.gender ? (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "flex flex-col mt-4"
                                        }, [
                                          unref(form).options && unref(form).options.age ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "p-4 border border-gray-300 rounded-md bg-gray-100 flex text-gray-600 space-x-3"
                                          }, [
                                            createVNode("span", null, "Subject - "),
                                            createVNode("span", {
                                              textContent: toDisplayString(unref(form).options.age.id)
                                            }, null, 8, ["textContent"]),
                                            createVNode("span", null, "/"),
                                            createVNode("span", {
                                              textContent: toDisplayString(unref(form).options.gender.name)
                                            }, null, 8, ["textContent"])
                                          ])) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" }, [
                                        withDirectives(createVNode("div", { class: "mt-6 flex flex-col items-center" }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Add Context"),
                                          createVNode(_sfc_main$4, {
                                            for: "formOptions",
                                            value: "What is your professional title?"
                                          }),
                                          createVNode(_sfc_main$5, {
                                            ref: "formOptions",
                                            modelValue: unref(form).options.context,
                                            "onUpdate:modelValue": ($event) => unref(form).options.context = $event,
                                            type: "text",
                                            class: "mt-1 block w-3/4",
                                            placeholder: "Vice President Marketing"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ], 512), [
                                          [vShow, unref(form).category.name === "Business"]
                                        ]),
                                        unref(form).category.name === "Social" ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mt-6 flex flex-col items-center"
                                        }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "How many people in this photo?"),
                                          createVNode(unref(RadioGroup), {
                                            modelValue: unref(form).options.multiplePeople,
                                            "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                            class: "mt-4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(RadioGroupLabel), { class: "sr-only" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" How many people in this photo? ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "flex flex-col items-center justify-center" }, [
                                                createVNode(unref(RadioGroupOption), {
                                                  as: "span",
                                                  class: "px-4 py-2",
                                                  key: "one",
                                                  value: "one",
                                                  onClick: resetOptions
                                                }, {
                                                  default: withCtx(({ active, checked }) => [
                                                    createVNode("div", {
                                                      class: [[
                                                        unref(form).category,
                                                        active && checked ? "bg-gray-300 ring-none" : "",
                                                        !active && checked ? "bg-gray-300" : "",
                                                        "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                      ], "rounded-lg p-3 border border-gray-500"]
                                                    }, [
                                                      createVNode(unref(RadioGroupLabel), {
                                                        as: "span",
                                                        class: "text-xl"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "uppercase" }, "One")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(RadioGroupOption), {
                                                  as: "span",
                                                  class: "px-4 py-2",
                                                  key: "multiple",
                                                  value: true
                                                }, {
                                                  default: withCtx(({ active, checked }) => [
                                                    createVNode("div", {
                                                      class: [[
                                                        unref(form).category,
                                                        active && checked ? "bg-gray-300 ring-none" : "",
                                                        !active && checked ? "bg-gray-300" : "",
                                                        "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none"
                                                      ], "rounded-lg p-3 border border-gray-500"]
                                                    }, [
                                                      createVNode(unref(RadioGroupLabel), {
                                                        as: "span",
                                                        class: "text-xl"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "uppercase" }, "Multiple")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ], 2)
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                            key: 0,
                                            modelValue: unref(form).options.position,
                                            "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                            message: unref(form).errors.options,
                                            label: "Choose One",
                                            options: [
                                              { id: 1, name: "The one on the left" },
                                              { id: 2, name: "The one in the center" },
                                              { id: 3, name: "The one on the right" }
                                            ]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                        ])) : createCommentVNode("", true),
                                        unref(form).category.name === "Dating" ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "mt-6 flex flex-col items-center w-full"
                                        }, [
                                          createVNode("h3", { class: "text-lg text-gray-600 font-bold" }, "Who is in the photo?"),
                                          createVNode("div", { class: "flex space-x-4 w-full" }, [
                                            createVNode(_sfc_main$1, {
                                              class: "w-full",
                                              modelValue: unref(form).options.gender,
                                              "onUpdate:modelValue": ($event) => unref(form).options.gender = $event,
                                              message: unref(form).errors.options,
                                              label: "Cender",
                                              options: [
                                                { id: 1, name: "Male" },
                                                { id: 2, name: "Female" }
                                              ]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "message"]),
                                            createVNode(_sfc_main$1, {
                                              modelValue: unref(form).options.age,
                                              "onUpdate:modelValue": ($event) => unref(form).options.age = $event,
                                              message: unref(form).errors.options,
                                              label: "Age",
                                              options: unref(allowedAges)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "message", "options"])
                                          ]),
                                          createVNode("div", { class: "mt-4" }, [
                                            createVNode("div", { class: "flex flex-col space-y-4" }, [
                                              createVNode(unref(SwitchGroup), {
                                                as: "div",
                                                class: "flex items-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Switch), {
                                                    modelValue: unref(form).options.multiplePeople,
                                                    "onUpdate:modelValue": ($event) => unref(form).options.multiplePeople = $event,
                                                    class: [unref(form).options.multiplePeople ? "bg-green-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", {
                                                        "aria-hidden": "true",
                                                        class: [unref(form).options.multiplePeople ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"]
                                                      }, null, 2)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                                  createVNode(unref(SwitchLabel), {
                                                    as: "span",
                                                    class: "ml-3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "text-sm font-medium text-gray-900" }, "This photo has multiple people")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              unref(form).options.multiplePeople ? (openBlock(), createBlock(_sfc_main$1, {
                                                key: 0,
                                                modelValue: unref(form).options.position,
                                                "onUpdate:modelValue": ($event) => unref(form).options.position = $event,
                                                message: unref(form).errors.options,
                                                label: "Choose One",
                                                options: [
                                                  { id: 1, name: "The one on the left" },
                                                  { id: 2, name: "The one in the center" },
                                                  { id: 3, name: "The one on the right" }
                                                ]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "message"])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ])) : createCommentVNode("", true),
                                        createVNode("div", { class: "mt-4 flex justify-center flex-col items-center" }, [
                                          createVNode("button", {
                                            type: "submit",
                                            class: "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                          }, " Start ")
                                        ]),
                                        withDirectives(createVNode("div", { class: "mt-4 bg-red-300 border-red-600 p-4 rounded-md" }, [
                                          createVNode("ul", { class: "list-disc px-2" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).errors, (error) => {
                                              return openBlock(), createBlock("li", {
                                                class: "text-red-900",
                                                textContent: toDisplayString(error)
                                              }, null, 8, ["textContent"]);
                                            }), 256))
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).hasErrors]
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["selectedIndex"])
                  ], 40, ["onSubmit"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Subject/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
