/** @jsx h */
import {
  h,
  createApp,
  defineComponent,
  reactive,
} from 'https://cdn.skypack.dev/vue@next/dist/vue.esm-browser.js';

const Image = defineComponent({
  name: 'Image',
  setup () {
    const state = reactive({
      loading: true,
    });
    return () => (
      <div className="p-8 w-full h-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col">
          <div className="w-3/4 overflow-hidden flex items-center justify-center shadow-lg rounded-lg relative">
            <img
              alt="Forest"
              src="https://source.unsplash.com/1200x630/?forest"
              width="1200"
              height="630"
              className={`w-full h-auto transition-opacity duration-200 ${state.loading ? 'opacity-0' : 'opacity-100'} `}
              onLoad={() => {
                state.loading = false;
              }}
            />
            {state.loading && <div className="absolute w-full h-full top-0 left-0 animate-pulse bg-gray-100 dark:bg-gray-900" />}
          </div>
          <div className="w-full p-2 flex items-center justify-center">
            <span className="text-xs">Source: Unsplash</span>
          </div>
        </div>
      </div>
    );
  }
});

export default function renderApp(root: HTMLDivElement): () => void {
  const app = createApp(Image);

  app.mount(root);

  return () => {
    app.unmount();
  };
}
