import { ref, h } from 'vue';

function loadScript(options, root = document.head) {
  return root.appendChild(Object.assign(document.createElement('script'), options));
}

export const Comp = defineComponent(() => {
  const root = ref(null);

  onMounted(() => {
    loadScript(
      {
        innerHTML: `
        !function(a,m,o,c,r,m){a[o+c]=a[o+c]||
            {setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1259802",hash:"9935402923c8f47b86bd9a223578ef04",locale:"ru"}
            ),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
      `
      },
      root.value
    );
    loadScript(
      {
        id: 'amoforms_script_1259802',
        async: 'async',
        charset: 'utf-8',
        src: 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1703018780'
      },
      root.value
    );
  });

  return () => h('div', { ref: root });
});
