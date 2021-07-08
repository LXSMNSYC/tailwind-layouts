import { render } from 'https://cdn.skypack.dev/solid-js/web';
import html from 'https://cdn.skypack.dev/solid-js/html';

function DiagonalSection() {
  return html`
    <div class="py-8 w-full h-full flex items-center justify-center">
      <div class="relative w-full h-64">
        <div class="absolute left-0 top-0 w-full h-full transform-gpu -skew-y-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        <div class="w-full h-full flex flex-col items-center justify-center">
          <span class="text-xl text-white z-10">Lorem Ipsum</span>
        </div>
      </div>
    </div>
  `;
}

export default function renderApp(root: HTMLDivElement): () => void {
  return render(DiagonalSection, root);
}
