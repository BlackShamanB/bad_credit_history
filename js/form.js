import { ref, h } from "vue";

function loadScript(options, root = document.head) {
  return root.appendChild(
    Object.assign(document.createElement("script"), options)
  );
}

export const Comp = defineComponent(() => {
  const root = ref(null);

  onMounted(() => {
    loadScript(
      {
        innerHTML: `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1278190",hash:"c45ebf4b10669d26e216a8ca11336d6f",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`,
      },
      root.value
    );
    loadScript(
      {
        id: "amoforms_script_1278182",
        async: "async",
        charset: "utf-8",
        src: "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1706371047",
      },
      root.value
    );
  });

  return () => h("div", { ref: root });
});
