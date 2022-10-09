import { ref, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, withModifiers, withDirectives, vModelText, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.9bd727d7.mjs";
import { useForm } from "@inertiajs/inertia-vue3";
import { TransitionRoot, RadioGroup, RadioGroupLabel, RadioGroupOption, RadioGroupDescription } from "@headlessui/vue";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import "@inertiajs/inertia";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    subject: Object,
    category: Object
  },
  setup(__props) {
    const props = __props;
    const scores = [
      { name: "Very", score: 3 },
      { name: "Yes", score: 2 },
      { name: "Somewhat", score: 1 },
      { name: "No", score: 0 }
    ];
    const form = useForm({
      _method: "POST",
      vote: {},
      subject: props.subject.data,
      comment: null
    });
    const showImage = ref(true);
    const saveVote = () => {
      showImage.value = false;
      form.post(route("category.subjects.criteria.store", {
        category: props.category.id,
        subject: props.subject.data.id
      }), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
          form.vote = {};
          showImage.value = true;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white"${_scopeId}><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"${_scopeId}><h2 id="subjects-heading" class="sr-only"${_scopeId}>Subjects</h2><div class="relative bg-white py-16 sm:py-24"${_scopeId}><div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"${_scopeId}><div class="relative sm:py-16 lg:py-0"${_scopeId}><div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"${_scopeId}><div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"${_scopeId}></div><svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392"${_scopeId}><defs${_scopeId}><pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"${_scopeId}><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"${_scopeId}></rect></pattern></defs><rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"${_scopeId}></rect></svg></div><div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"${_scopeId}><span class="mb-2 p-2 bg-gray-700 text-white uppercase w-full flex justify-center"${_scopeId}>${ssrInterpolate(__props.category.name)}</span><div class="relative rounded-2xl pt-64 pb-10 shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              class: "absolute inset-0",
              show: showImage.value,
              enter: "duration-500",
              "enter-to": "animate__animated animate__flipInY",
              leave: "duration-1000",
              "leave-to": "animate__animated animate__flipOutY"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full rounded-2xl"${ssrRenderAttr("src", __props.subject.data.image)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full rounded-2xl",
                      src: __props.subject.data.image,
                      alt: ""
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"${_scopeId}><div class="pt-12 sm:pt-16 lg:pt-20"${_scopeId}><form${_scopeId}><div class="grid grid-cols-3 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.subject.data.criteria, (criteria) => {
              _push2(`<div${_scopeId}><h2${_scopeId}>${ssrInterpolate(criteria.name)}</h2><div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(RadioGroup), {
                modelValue: unref(form).vote[criteria.id],
                "onUpdate:modelValue": ($event) => unref(form).vote[criteria.id] = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(RadioGroupLabel), { class: "sr-only" }, null, _parent3, _scopeId2));
                    _push3(`<div class="space-y-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(scores, (option) => {
                      _push3(ssrRenderComponent(unref(RadioGroupOption), {
                        as: "template",
                        key: criteria.id,
                        value: option
                      }, {
                        default: withCtx(({ checked }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="${ssrRenderClass([unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-transparent border-indigo-500 ring-2 ring-indigo-500" : "border-gray-300", "relative block cursor-pointer rounded-lg border bg-white px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between"])}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                              as: "span",
                              class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div${_scopeId4}><span class="font-medium text-gray-900"${_scopeId4}>${ssrInterpolate(option.score)}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", null, [
                                      createVNode("span", {
                                        class: "font-medium text-gray-900",
                                        textContent: toDisplayString(option.score)
                                      }, null, 8, ["textContent"])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                              as: "span",
                              class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="font-medium text-gray-900"${_scopeId4}>${ssrInterpolate(option.name)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: "font-medium text-gray-900",
                                      textContent: toDisplayString(option.name)
                                    }, null, 8, ["textContent"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<span class="${ssrRenderClass([unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"])}" aria-hidden="true"${_scopeId3}></span></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-transparent border-indigo-500 ring-2 ring-indigo-500" : "border-gray-300", "relative block cursor-pointer rounded-lg border bg-white px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between"]
                              }, [
                                createVNode(unref(RadioGroupDescription), {
                                  as: "span",
                                  class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("span", {
                                        class: "font-medium text-gray-900",
                                        textContent: toDisplayString(option.score)
                                      }, null, 8, ["textContent"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(RadioGroupDescription), {
                                  as: "span",
                                  class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "font-medium text-gray-900",
                                      textContent: toDisplayString(option.name)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("span", {
                                  class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"],
                                  "aria-hidden": "true"
                                }, null, 2)
                              ], 2)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode(unref(RadioGroupLabel), {
                        class: "sr-only",
                        textContent: toDisplayString(criteria.name)
                      }, null, 8, ["textContent"]),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(scores, (option) => {
                          return createVNode(unref(RadioGroupOption), {
                            as: "template",
                            key: criteria.id,
                            value: option
                          }, {
                            default: withCtx(({ checked }) => [
                              createVNode("div", {
                                class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-transparent border-indigo-500 ring-2 ring-indigo-500" : "border-gray-300", "relative block cursor-pointer rounded-lg border bg-white px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between"]
                              }, [
                                createVNode(unref(RadioGroupDescription), {
                                  as: "span",
                                  class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("span", {
                                        class: "font-medium text-gray-900",
                                        textContent: toDisplayString(option.score)
                                      }, null, 8, ["textContent"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(RadioGroupDescription), {
                                  as: "span",
                                  class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "font-medium text-gray-900",
                                      textContent: toDisplayString(option.name)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("span", {
                                  class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"],
                                  "aria-hidden": "true"
                                }, null, 2)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col w-full"${_scopeId}><div${_scopeId}><label for="about" class="block text-sm font-medium text-gray-700"${_scopeId}>Leave a note</label><div class="mt-1"${_scopeId}><textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com"${_scopeId}>${ssrInterpolate(unref(form).comment)}</textarea></div></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} type="submit" class="${ssrRenderClass([[unref(form).processing ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700"], "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"])}"${_scopeId}><span style="${ssrRenderStyle(unref(form).processing ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ArrowPathIcon), { class: "w-5 h-5 animate-spin" }, null, _parent2, _scopeId));
            _push2(`</span><span${_scopeId}> Submit </span></button><div style="${ssrRenderStyle(unref(form).hasErrors ? null : { display: "none" })}" class="mt-4 bg-red-300 border-red-600 p-4 rounded-md"${_scopeId}><ul class="list-disc px-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).errors, (error) => {
              _push2(`<li class="text-red-900"${_scopeId}>${ssrInterpolate(error)}</li>`);
            });
            _push2(`<!--]--></ul></div></div></form></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white" }, [
                createVNode("div", { class: "mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" }, [
                  createVNode("h2", {
                    id: "subjects-heading",
                    class: "sr-only"
                  }, "Subjects"),
                  createVNode("div", { class: "relative bg-white py-16 sm:py-24" }, [
                    createVNode("div", { class: "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8" }, [
                      createVNode("div", { class: "relative sm:py-16 lg:py-0" }, [
                        createVNode("div", {
                          "aria-hidden": "true",
                          class: "hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                        }, [
                          createVNode("div", { class: "absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" }),
                          (openBlock(), createBlock("svg", {
                            class: "absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12",
                            width: "404",
                            height: "392",
                            fill: "none",
                            viewBox: "0 0 404 392"
                          }, [
                            createVNode("defs", null, [
                              createVNode("pattern", {
                                id: "02f20b47-fd69-4224-a62a-4c9de5c763f7",
                                x: "0",
                                y: "0",
                                width: "20",
                                height: "20",
                                patternUnits: "userSpaceOnUse"
                              }, [
                                createVNode("rect", {
                                  x: "0",
                                  y: "0",
                                  width: "4",
                                  height: "4",
                                  class: "text-gray-200",
                                  fill: "currentColor"
                                })
                              ])
                            ]),
                            createVNode("rect", {
                              width: "404",
                              height: "392",
                              fill: "url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                            })
                          ]))
                        ]),
                        createVNode("div", { class: "relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20" }, [
                          createVNode("span", {
                            class: "mb-2 p-2 bg-gray-700 text-white uppercase w-full flex justify-center",
                            textContent: toDisplayString(__props.category.name)
                          }, null, 8, ["textContent"]),
                          createVNode("div", { class: "relative rounded-2xl pt-64 pb-10 shadow-xl" }, [
                            createVNode(unref(TransitionRoot), {
                              class: "absolute inset-0",
                              show: showImage.value,
                              enter: "duration-500",
                              "enter-to": "animate__animated animate__flipInY",
                              leave: "duration-1000",
                              "leave-to": "animate__animated animate__flipOutY"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  class: "w-full rounded-2xl",
                                  src: __props.subject.data.image,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 1
                            }, 8, ["show"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0" }, [
                        createVNode("div", { class: "pt-12 sm:pt-16 lg:pt-20" }, [
                          createVNode("form", {
                            onSubmit: withModifiers(saveVote, ["prevent"])
                          }, [
                            createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.subject.data.criteria, (criteria) => {
                                return openBlock(), createBlock("div", null, [
                                  createVNode("h2", {
                                    textContent: toDisplayString(criteria.name)
                                  }, null, 8, ["textContent"]),
                                  createVNode("div", null, [
                                    createVNode(unref(RadioGroup), {
                                      modelValue: unref(form).vote[criteria.id],
                                      "onUpdate:modelValue": ($event) => unref(form).vote[criteria.id] = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(RadioGroupLabel), {
                                          class: "sr-only",
                                          textContent: toDisplayString(criteria.name)
                                        }, null, 8, ["textContent"]),
                                        createVNode("div", { class: "space-y-4" }, [
                                          (openBlock(), createBlock(Fragment, null, renderList(scores, (option) => {
                                            return createVNode(unref(RadioGroupOption), {
                                              as: "template",
                                              key: criteria.id,
                                              value: option
                                            }, {
                                              default: withCtx(({ checked }) => [
                                                createVNode("div", {
                                                  class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-transparent border-indigo-500 ring-2 ring-indigo-500" : "border-gray-300", "relative block cursor-pointer rounded-lg border bg-white px-4 py-4 divide-x divide-gray-300 shadow-sm focus:outline-none sm:flex sm:justify-between"]
                                                }, [
                                                  createVNode(unref(RadioGroupDescription), {
                                                    as: "span",
                                                    class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", null, [
                                                        createVNode("span", {
                                                          class: "font-medium text-gray-900",
                                                          textContent: toDisplayString(option.score)
                                                        }, null, 8, ["textContent"])
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(unref(RadioGroupDescription), {
                                                    as: "span",
                                                    class: "mt-2 flex justify-between text-sm sm:mt-0 sm:ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", {
                                                        class: "font-medium text-gray-900",
                                                        textContent: toDisplayString(option.name)
                                                      }, null, 8, ["textContent"])
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode("span", {
                                                    class: [unref(form).vote[criteria.id] && unref(form).vote[criteria.id].score === option.score ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"],
                                                    "aria-hidden": "true"
                                                  }, null, 2)
                                                ], 2)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 64))
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]);
                              }), 256))
                            ]),
                            createVNode("div", { class: "flex flex-col w-full" }, [
                              createVNode("div", null, [
                                createVNode("label", {
                                  for: "about",
                                  class: "block text-sm font-medium text-gray-700"
                                }, "Leave a note"),
                                createVNode("div", { class: "mt-1" }, [
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => unref(form).comment = $event,
                                    id: "about",
                                    name: "about",
                                    rows: "3",
                                    class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                                    placeholder: "you@example.com"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).comment]
                                  ])
                                ])
                              ]),
                              createVNode("button", {
                                disabled: unref(form).processing,
                                type: "submit",
                                class: [[unref(form).processing ? "bg-gray-300" : "bg-indigo-600 hover:bg-indigo-700"], "mt-4 flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"]
                              }, [
                                withDirectives(createVNode("span", null, [
                                  createVNode(unref(ArrowPathIcon), { class: "w-5 h-5 animate-spin" })
                                ], 512), [
                                  [vShow, unref(form).processing]
                                ]),
                                createVNode("span", null, " Submit ")
                              ], 10, ["disabled"]),
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
                          ], 40, ["onSubmit"])
                        ])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Subject/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
