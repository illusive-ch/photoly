import { ref, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.9bd727d7.mjs";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/24/outline";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    scores: Object,
    subject: Object,
    comments: Object
  },
  setup(__props) {
    ref(0);
    const tabs = [
      { name: "Scores", selected: true },
      { name: "Data", selected: false },
      { name: "Notes", selected: false },
      { name: "Image", selected: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Profile" }, _attrs), {
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
            _push2(`<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"${_scopeId}><div class="bg-white rounded-md p-4"${_scopeId}><div class="grid grid-cols-2 gap-4 divide-x divide-gray-300"${_scopeId}><div class="aspect-w-1 aspect-h-1 w-full"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", __props.subject.data.image)} alt="content_images" class="h-full w-full object-cover object-center sm:rounded-lg"${_scopeId}></div></div><div class="space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TabGroup), { defaultIndex: 0 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-b border-gray-200"${_scopeId2}><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TabList), { class: "mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(tabs, (tab) => {
                          _push4(ssrRenderComponent(unref(Tab), { as: "template" }, {
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
                            return createVNode(unref(Tab), { as: "template" }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  type: "button",
                                  class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                }, toDisplayString(tab.name), 3)
                              ]),
                              _: 2
                            }, 1024);
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
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.scores, (score, name) => {
                                _push5(`<div class="flex flex-col items-center mt-4"${_scopeId4}><div class="w-full trustworthy relative"${_scopeId4}><div class="text-lg flex space-x-4 items-center"${_scopeId4}><span class=""${_scopeId4}>${ssrInterpolate(name)}</span><span class="font-bold"${_scopeId4}>${ssrInterpolate(score.avg)}</span></div><div class="relative h-3"${_scopeId4}><div class="h-8 bg-gray-50 border relative rounded-lg"${_scopeId4}><div class="bg-blue-100 absolute inset-0 h-full" style="${ssrRenderStyle("width: " + score.confidence.higher * 10 + "%;")}"${_scopeId4}></div><div class="bg-blue-200 absolute inset-0 h-full" style="${ssrRenderStyle("width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 3 + score.confidence.lower * 10) + "%;")}"${_scopeId4}></div><div class="bg-blue-300 absolute inset-0 h-full" style="${ssrRenderStyle("width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;")}"${_scopeId4}></div><div class="bg-blue-400 absolute inset-0 h-full" style="${ssrRenderStyle("width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 + score.confidence.lower * 10) + "%;")}"${_scopeId4}></div><div class="bg-blue-500 absolute inset-0 h-full" style="${ssrRenderStyle("width: " + score.confidence.lower * 10 + "%;")}"${_scopeId4}></div></div></div><div class="w-full mt-4 relative h-10"${_scopeId4}><div class="absolute" style="${ssrRenderStyle("left: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;")}"${_scopeId4}><div class="flex flex-col"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(ChevronUpIcon), { class: "w-5 h-5" }, null, _parent5, _scopeId4));
                                _push5(`<span class="text-sm"${_scopeId4}>Above Average</span></div></div></div></div></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.scores, (score, name) => {
                                  return openBlock(), createBlock("div", { class: "flex flex-col items-center mt-4" }, [
                                    createVNode("div", { class: "w-full trustworthy relative" }, [
                                      createVNode("div", { class: "text-lg flex space-x-4 items-center" }, [
                                        createVNode("span", {
                                          class: "",
                                          textContent: toDisplayString(name)
                                        }, null, 8, ["textContent"]),
                                        createVNode("span", {
                                          class: "font-bold",
                                          textContent: toDisplayString(score.avg)
                                        }, null, 8, ["textContent"])
                                      ]),
                                      createVNode("div", { class: "relative h-3" }, [
                                        createVNode("div", { class: "h-8 bg-gray-50 border relative rounded-lg" }, [
                                          createVNode("div", {
                                            class: "bg-blue-100 absolute inset-0 h-full",
                                            style: "width: " + score.confidence.higher * 10 + "%;"
                                          }, null, 4),
                                          createVNode("div", {
                                            class: "bg-blue-200 absolute inset-0 h-full",
                                            style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 3 + score.confidence.lower * 10) + "%;"
                                          }, null, 4),
                                          createVNode("div", {
                                            class: "bg-blue-300 absolute inset-0 h-full",
                                            style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                          }, null, 4),
                                          createVNode("div", {
                                            class: "bg-blue-400 absolute inset-0 h-full",
                                            style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 + score.confidence.lower * 10) + "%;"
                                          }, null, 4),
                                          createVNode("div", {
                                            class: "bg-blue-500 absolute inset-0 h-full",
                                            style: "width: " + score.confidence.lower * 10 + "%;"
                                          }, null, 4)
                                        ])
                                      ]),
                                      createVNode("div", { class: "w-full mt-4 relative h-10" }, [
                                        createVNode("div", {
                                          class: "absolute",
                                          style: "left: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                        }, [
                                          createVNode("div", { class: "flex flex-col" }, [
                                            createVNode(unref(ChevronUpIcon), { class: "w-5 h-5" }),
                                            createVNode("span", { class: "text-sm" }, "Above Average")
                                          ])
                                        ], 4)
                                      ])
                                    ])
                                  ]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1${_scopeId4}>data</h1>`);
                            } else {
                              return [
                                createVNode("h1", null, "data")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanel), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div${_scopeId4}><h2 class="sr-only"${_scopeId4}>Comments</h2><div class="-my-10"${_scopeId4}><!--[-->`);
                              ssrRenderList(__props.comments.data, (comment, index) => {
                                _push5(`<div class="flex space-x-4 text-sm text-gray-500"${_scopeId4}><div class="${ssrRenderClass([index === 0 ? "" : "border-t border-gray-200", "flex-1 py-10"])}"${_scopeId4}><h3 class="font-medium text-gray-900"${_scopeId4}>${ssrInterpolate(comment.age)} / ${ssrInterpolate(comment.gender)}</h3><p${_scopeId4}><span${_scopeId4}>${ssrInterpolate(comment.date)}</span></p><div class="prose prose-sm mt-4 max-w-none text-gray-500"${_scopeId4}>${ssrInterpolate(comment.body)}</div></div></div>`);
                              });
                              _push5(`<!--]--></div></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("h2", { class: "sr-only" }, "Comments"),
                                  createVNode("div", { class: "-my-10" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.comments.data, (comment, index) => {
                                      return openBlock(), createBlock("div", {
                                        key: comment.id,
                                        class: "flex space-x-4 text-sm text-gray-500"
                                      }, [
                                        createVNode("div", {
                                          class: [index === 0 ? "" : "border-t border-gray-200", "flex-1 py-10"]
                                        }, [
                                          createVNode("h3", { class: "font-medium text-gray-900" }, toDisplayString(comment.age) + " / " + toDisplayString(comment.gender), 1),
                                          createVNode("p", null, [
                                            createVNode("span", null, toDisplayString(comment.date), 1)
                                          ]),
                                          createVNode("div", {
                                            class: "prose prose-sm mt-4 max-w-none text-gray-500",
                                            textContent: toDisplayString(comment.body)
                                          }, null, 8, ["textContent"])
                                        ], 2)
                                      ]);
                                    }), 128))
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
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.scores, (score, name) => {
                                return openBlock(), createBlock("div", { class: "flex flex-col items-center mt-4" }, [
                                  createVNode("div", { class: "w-full trustworthy relative" }, [
                                    createVNode("div", { class: "text-lg flex space-x-4 items-center" }, [
                                      createVNode("span", {
                                        class: "",
                                        textContent: toDisplayString(name)
                                      }, null, 8, ["textContent"]),
                                      createVNode("span", {
                                        class: "font-bold",
                                        textContent: toDisplayString(score.avg)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    createVNode("div", { class: "relative h-3" }, [
                                      createVNode("div", { class: "h-8 bg-gray-50 border relative rounded-lg" }, [
                                        createVNode("div", {
                                          class: "bg-blue-100 absolute inset-0 h-full",
                                          style: "width: " + score.confidence.higher * 10 + "%;"
                                        }, null, 4),
                                        createVNode("div", {
                                          class: "bg-blue-200 absolute inset-0 h-full",
                                          style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 3 + score.confidence.lower * 10) + "%;"
                                        }, null, 4),
                                        createVNode("div", {
                                          class: "bg-blue-300 absolute inset-0 h-full",
                                          style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                        }, null, 4),
                                        createVNode("div", {
                                          class: "bg-blue-400 absolute inset-0 h-full",
                                          style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 + score.confidence.lower * 10) + "%;"
                                        }, null, 4),
                                        createVNode("div", {
                                          class: "bg-blue-500 absolute inset-0 h-full",
                                          style: "width: " + score.confidence.lower * 10 + "%;"
                                        }, null, 4)
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-full mt-4 relative h-10" }, [
                                      createVNode("div", {
                                        class: "absolute",
                                        style: "left: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                      }, [
                                        createVNode("div", { class: "flex flex-col" }, [
                                          createVNode(unref(ChevronUpIcon), { class: "w-5 h-5" }),
                                          createVNode("span", { class: "text-sm" }, "Above Average")
                                        ])
                                      ], 4)
                                    ])
                                  ])
                                ]);
                              }), 256))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("h1", null, "data")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h2", { class: "sr-only" }, "Comments"),
                                createVNode("div", { class: "-my-10" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.comments.data, (comment, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: comment.id,
                                      class: "flex space-x-4 text-sm text-gray-500"
                                    }, [
                                      createVNode("div", {
                                        class: [index === 0 ? "" : "border-t border-gray-200", "flex-1 py-10"]
                                      }, [
                                        createVNode("h3", { class: "font-medium text-gray-900" }, toDisplayString(comment.age) + " / " + toDisplayString(comment.gender), 1),
                                        createVNode("p", null, [
                                          createVNode("span", null, toDisplayString(comment.date), 1)
                                        ]),
                                        createVNode("div", {
                                          class: "prose prose-sm mt-4 max-w-none text-gray-500",
                                          textContent: toDisplayString(comment.body)
                                        }, null, 8, ["textContent"])
                                      ], 2)
                                    ]);
                                  }), 128))
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
                              return createVNode(unref(Tab), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    type: "button",
                                    class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                  }, toDisplayString(tab.name), 3)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(unref(TabPanels), { class: "pb-48 mt-8" }, {
                      default: withCtx(() => [
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.scores, (score, name) => {
                              return openBlock(), createBlock("div", { class: "flex flex-col items-center mt-4" }, [
                                createVNode("div", { class: "w-full trustworthy relative" }, [
                                  createVNode("div", { class: "text-lg flex space-x-4 items-center" }, [
                                    createVNode("span", {
                                      class: "",
                                      textContent: toDisplayString(name)
                                    }, null, 8, ["textContent"]),
                                    createVNode("span", {
                                      class: "font-bold",
                                      textContent: toDisplayString(score.avg)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  createVNode("div", { class: "relative h-3" }, [
                                    createVNode("div", { class: "h-8 bg-gray-50 border relative rounded-lg" }, [
                                      createVNode("div", {
                                        class: "bg-blue-100 absolute inset-0 h-full",
                                        style: "width: " + score.confidence.higher * 10 + "%;"
                                      }, null, 4),
                                      createVNode("div", {
                                        class: "bg-blue-200 absolute inset-0 h-full",
                                        style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 3 + score.confidence.lower * 10) + "%;"
                                      }, null, 4),
                                      createVNode("div", {
                                        class: "bg-blue-300 absolute inset-0 h-full",
                                        style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                      }, null, 4),
                                      createVNode("div", {
                                        class: "bg-blue-400 absolute inset-0 h-full",
                                        style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 + score.confidence.lower * 10) + "%;"
                                      }, null, 4),
                                      createVNode("div", {
                                        class: "bg-blue-500 absolute inset-0 h-full",
                                        style: "width: " + score.confidence.lower * 10 + "%;"
                                      }, null, 4)
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-full mt-4 relative h-10" }, [
                                    createVNode("div", {
                                      class: "absolute",
                                      style: "left: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                    }, [
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode(unref(ChevronUpIcon), { class: "w-5 h-5" }),
                                        createVNode("span", { class: "text-sm" }, "Above Average")
                                      ])
                                    ], 4)
                                  ])
                                ])
                              ]);
                            }), 256))
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("h1", null, "data")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanel), null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("h2", { class: "sr-only" }, "Comments"),
                              createVNode("div", { class: "-my-10" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.comments.data, (comment, index) => {
                                  return openBlock(), createBlock("div", {
                                    key: comment.id,
                                    class: "flex space-x-4 text-sm text-gray-500"
                                  }, [
                                    createVNode("div", {
                                      class: [index === 0 ? "" : "border-t border-gray-200", "flex-1 py-10"]
                                    }, [
                                      createVNode("h3", { class: "font-medium text-gray-900" }, toDisplayString(comment.age) + " / " + toDisplayString(comment.gender), 1),
                                      createVNode("p", null, [
                                        createVNode("span", null, toDisplayString(comment.date), 1)
                                      ]),
                                      createVNode("div", {
                                        class: "prose prose-sm mt-4 max-w-none text-gray-500",
                                        textContent: toDisplayString(comment.body)
                                      }, null, 8, ["textContent"])
                                    ], 2)
                                  ]);
                                }), 128))
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
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" }, [
                createVNode("div", { class: "bg-white rounded-md p-4" }, [
                  createVNode("div", { class: "grid grid-cols-2 gap-4 divide-x divide-gray-300" }, [
                    createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full" }, [
                      createVNode("div", null, [
                        createVNode("img", {
                          src: __props.subject.data.image,
                          alt: "content_images",
                          class: "h-full w-full object-cover object-center sm:rounded-lg"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("div", { class: "space-x-2" }, [
                      createVNode(unref(TabGroup), { defaultIndex: 0 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-b border-gray-200" }, [
                            createVNode("div", { class: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" }, [
                              createVNode(unref(TabList), { class: "mt-6 sm:mt-2 2xl:mt-5 -mb-px flex justify-between" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                                    return createVNode(unref(Tab), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          type: "button",
                                          class: [[selected ? "border-pink-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"], "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]
                                        }, toDisplayString(tab.name), 3)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode(unref(TabPanels), { class: "pb-48 mt-8" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.scores, (score, name) => {
                                    return openBlock(), createBlock("div", { class: "flex flex-col items-center mt-4" }, [
                                      createVNode("div", { class: "w-full trustworthy relative" }, [
                                        createVNode("div", { class: "text-lg flex space-x-4 items-center" }, [
                                          createVNode("span", {
                                            class: "",
                                            textContent: toDisplayString(name)
                                          }, null, 8, ["textContent"]),
                                          createVNode("span", {
                                            class: "font-bold",
                                            textContent: toDisplayString(score.avg)
                                          }, null, 8, ["textContent"])
                                        ]),
                                        createVNode("div", { class: "relative h-3" }, [
                                          createVNode("div", { class: "h-8 bg-gray-50 border relative rounded-lg" }, [
                                            createVNode("div", {
                                              class: "bg-blue-100 absolute inset-0 h-full",
                                              style: "width: " + score.confidence.higher * 10 + "%;"
                                            }, null, 4),
                                            createVNode("div", {
                                              class: "bg-blue-200 absolute inset-0 h-full",
                                              style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 3 + score.confidence.lower * 10) + "%;"
                                            }, null, 4),
                                            createVNode("div", {
                                              class: "bg-blue-300 absolute inset-0 h-full",
                                              style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                            }, null, 4),
                                            createVNode("div", {
                                              class: "bg-blue-400 absolute inset-0 h-full",
                                              style: "width: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 + score.confidence.lower * 10) + "%;"
                                            }, null, 4),
                                            createVNode("div", {
                                              class: "bg-blue-500 absolute inset-0 h-full",
                                              style: "width: " + score.confidence.lower * 10 + "%;"
                                            }, null, 4)
                                          ])
                                        ]),
                                        createVNode("div", { class: "w-full mt-4 relative h-10" }, [
                                          createVNode("div", {
                                            class: "absolute",
                                            style: "left: " + ((score.confidence.higher * 10 - score.confidence.lower * 10) / 4 * 2 + score.confidence.lower * 10) + "%;"
                                          }, [
                                            createVNode("div", { class: "flex flex-col" }, [
                                              createVNode(unref(ChevronUpIcon), { class: "w-5 h-5" }),
                                              createVNode("span", { class: "text-sm" }, "Above Average")
                                            ])
                                          ], 4)
                                        ])
                                      ])
                                    ]);
                                  }), 256))
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode("h1", null, "data")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h2", { class: "sr-only" }, "Comments"),
                                    createVNode("div", { class: "-my-10" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.comments.data, (comment, index) => {
                                        return openBlock(), createBlock("div", {
                                          key: comment.id,
                                          class: "flex space-x-4 text-sm text-gray-500"
                                        }, [
                                          createVNode("div", {
                                            class: [index === 0 ? "" : "border-t border-gray-200", "flex-1 py-10"]
                                          }, [
                                            createVNode("h3", { class: "font-medium text-gray-900" }, toDisplayString(comment.age) + " / " + toDisplayString(comment.gender), 1),
                                            createVNode("p", null, [
                                              createVNode("span", null, toDisplayString(comment.date), 1)
                                            ]),
                                            createVNode("div", {
                                              class: "prose prose-sm mt-4 max-w-none text-gray-500",
                                              textContent: toDisplayString(comment.body)
                                            }, null, 8, ["textContent"])
                                          ], 2)
                                        ]);
                                      }), 128))
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
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Subject/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
