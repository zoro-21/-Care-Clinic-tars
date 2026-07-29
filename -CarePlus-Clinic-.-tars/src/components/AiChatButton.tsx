import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AiChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const tarsEmbedUrl = import.meta.env.VITE_TARS_EMBED_URL as string | undefined;

  useEffect(() => {
    if (!tarsEmbedUrl || !isOpen) return;

    const script = document.createElement('script');
    script.src = tarsEmbedUrl;
    script.async = true;
    script.dataset.careplusTars = 'true';
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isOpen, tarsEmbedUrl]);

  return (
    <>
      <button
        aria-label="Open CarePlus AI assistant"
        className="fixed bottom-6 right-6 z-40 grid h-16 w-16 place-items-center rounded-full bg-teal-600 text-white shadow-2xl shadow-teal-800/30 transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
        onClick={() => setIsOpen((value) => !value)}
      >
        <MessageCircle />
      </button>

      {isOpen && !tarsEmbedUrl ? (
        <aside className="fixed bottom-24 right-6 z-40 w-[min(92vw,24rem)] rounded-3xl border border-teal-100 bg-white p-5 shadow-soft dark:border-teal-900 dark:bg-slate-900">
          <p className="text-sm font-bold text-teal-600">CarePlus AI Assistant</p>
          <h2 className="mt-2 text-xl font-black">Tars embed ready</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Add your real Tars script URL to <code>VITE_TARS_EMBED_URL</code>. Configure it to answer
            the FAQ knowledge base, identify new vs existing patients, capture appointment details,
            and hand off to the mocked Salesforce flow.
          </p>
        </aside>
      ) : null}
    </>
  );
}
