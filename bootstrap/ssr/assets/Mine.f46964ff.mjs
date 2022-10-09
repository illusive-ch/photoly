import { ref, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.9bd727d7.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
const _sfc_main = {
  __name: "Mine",
  __ssrInlineRender: true,
  props: {
    subjects: Object
  },
  setup(__props) {
    ref(0);
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
            _push2(`<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"${_scopeId}><div class="bg-white rounded-md p-4"${_scopeId}><div class="grid grid-cols-3 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.subjects.data, (subject) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: subject.id,
                href: _ctx.route("category.subjects.show", { category: subject.category.id, subject: subject.id }),
                class: "group cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3"${_scopeId2}><img${ssrRenderAttr("src", subject.image)} alt="" class="h-full w-full object-cover object-center group-hover:opacity-75"${_scopeId2}></div><div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                        createVNode("img", {
                          src: subject.image,
                          alt: "",
                          class: "h-full w-full object-cover object-center group-hover:opacity-75"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" }, [
                createVNode("div", { class: "bg-white rounded-md p-4" }, [
                  createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.subjects.data, (subject) => {
                      return openBlock(), createBlock(unref(Link), {
                        key: subject.id,
                        href: _ctx.route("category.subjects.show", { category: subject.category.id, subject: subject.id }),
                        class: "group cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3" }, [
                            createVNode("img", {
                              src: subject.image,
                              alt: "",
                              class: "h-full w-full object-cover object-center group-hover:opacity-75"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium text-gray-900" })
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Subject/Mine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
