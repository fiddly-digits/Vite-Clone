import viteLogo from '/vite.svg';
import ViteCard from './components/ViteCard';

function App() {
  return (
    <>
      <div className='container mx-auto w-12/12 pt-10'>
        <header className='header-container w-full h-auto flex columns-2 px-64 py-8 mb-4'>
          <div className='w-3/6'>
            <div className='bg-clip-text bg-gradient-to-r w-24 from-pink-400 via-purple-500 to-sky-500'>
              <h1 className='text-5xl font-bold text-transparent bg-clip-text p-2'>
                Vite
              </h1>
            </div>
            <p className='text-5xl font-bold p-2'>
              Next Generation Frontend Tooling
            </p>
            <p className='text-lg p-2'>
              Get ready for a development environment that can finally catch up
              with you.
            </p>
            <div className='button-container flex gap-4 p-2'>
              <button className='px-3 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium'>
                Get Started
              </button>
              <button className='px-3 py-2 border rounded-full border-stone-600 hover:bg-neutral-700 font-medium'>
                Why Vite?
              </button>
              <button className='px-3 py-2 border rounded-full border-stone-600 hover:bg-neutral-700 font-medium'>
                View on Github
              </button>
            </div>
          </div>
          <div className='w-3/6 flex align-center justify-center'>
            <div class='absolute blur-xl flex h-[350px] bottom-[850px] items-center justify-center from-pink-400 via-purple-500 to-sky-500 before:absolute before:h-[390px] before:w-[400px] before:rounded-full before:bg-gradient-to-r'></div>
            <img
              src={viteLogo}
              className='blur-none h-[300px]'
              alt='Vite logo'
            />
          </div>
        </header>
        <section className='card-container grid grid-cols-3 px-64'>
          <ViteCard
            icon='💡'
            title='Instant Server Start'
            content='On demand file serving over native ESM, no bundling required!'
          />
          <ViteCard
            icon='⚡️'
            title='Lightning Fast HMR'
            content='Hot Module Replacement (HMR) that stays fast regardless of app size.'
          />
          <ViteCard
            icon='🛠️'
            title='Rich Features'
            content='Out-of-the-box support for TypeScript, JSX, CSS and more.'
          />
          <ViteCard
            icon='📦'
            title='Optimized Build'
            content='Pre-configured Rollup build with multi-page and library mode support.'
          />
          <ViteCard
            icon='🔩'
            title='Universal Plugins'
            content='Rollup-superset plugin interface shared between dev and build.'
          />
          <ViteCard
            icon='🔑'
            title='Fully Typed APIs'
            content='Flexible programmatic APIs with full TypeScript typing.'
          />
        </section>
      </div>
    </>
  );
}

export default App;
