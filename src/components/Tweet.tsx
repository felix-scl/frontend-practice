import { RiInformationLine, RiLink } from 'react-icons/ri';
import { FaHeart, FaComment } from 'react-icons/fa6';

export default function Tweet() {
  return (
    <article className='mx-auto rounded-2xl px-4 py-2 border border-slate-600 bg-slate-800 min-w-[300px] max-w-[400px] hocus:bg-[#202c3f]'>
      <div className='flex items-center gap-4 mb-2 cursor-pointer text-sm'>
        <div className='min-w-[2.75rem] h-11 bg-slate-200 rounded-full'></div>
        <div>
          <a href='#'>
            <h3 className='text-white font-bold hocus:underline'>
              Average Joe
            </h3>
          </a>
          <div>
            <a href='#' className='text-slate-400'>
              @avgjoe
            </a>
            <span className='px-1'>·</span>
            <a href='#' className='font-bold text-sky-400 hocus:underline'>
              Follow
            </a>
          </div>
        </div>
        <div className='ml-auto mb-auto'>
          <svg
            viewBox='0 0 24 24'
            aria-hidden='true'
            className='w-6 h-6 fill-white'
          >
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </div>
      </div>

      <p className='text-sm text-white mb-1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi
        earum, molestiae dicta dolore sequi?
      </p>

      <div className='flex justify-between items-center text-slate-400 mb-1 cursor-pointer'>
        <a
          href='#'
          className='text-sm hocus:underline hocus:underline-offset-1'
        >
          <time dateTime='2023-10-30T20:36:00'>8:36 PM · Oct 30, 2023</time>
        </a>
        <a
          href='#'
          className='text-base p-2 rounded-full hocus:bg-sky-400/10 transition-colors duration-300 group'
        >
          <RiInformationLine className='group-hover:text-sky-400 group-focus:text-sky-400 transition-colors duration-300' />
        </a>
      </div>

      <div className='border-t border-slate-600 pt-1 pb-1.5 cursor-pointer flex gap-6 font-bold'>
        <a
          href='#'
          className='flex items-center gap-1 hocus:underline decoration-pink-600 group'
        >
          <div className='p-1.5 rounded-full group-hover:bg-pink-600/20 group-focus:bg-pink-600/20'>
            <FaHeart className='text-pink-600 text-lg' />
          </div>
          <span className='text-sm group-hover:text-pink-600 group-focus:text-pink-600'>
            3
          </span>
        </a>
        <a
          href='#'
          className='flex items-center gap-1 hocus:underline decoration-sky-500 group'
        >
          <div className='p-1.5 rounded-full group-hover:bg-sky-500/20 group-focus:bg-sky-500/20'>
            <FaComment className='text-sky-500 text-lg' />
          </div>
          <span className='text-sm group-hover:text-sky-500 group-focus:text-sky-500'>
            Reply
          </span>
        </a>
        <a
          href='#'
          className='flex items-center gap-1 hocus:underline decoration-emerald-500 group'
        >
          <div className='p-1.5 rounded-full group-hover:bg-emerald-500/20 group-focus:bg-emerald-500/20'>
            <RiLink className='text-slate-400 group-hover:text-emerald-500 text-xl' />
          </div>
          <span className='text-sm group-hover:text-emerald-500 group-focus:text-emerald-500'>
            Copy link
          </span>
        </a>
      </div>

      <div className='mb-1'>
        <a
          href='#'
          className='border border-slate-500 rounded-full block text-center text-sm text-sky-400 font-bold py-1 px-4 hocus:bg-sky-500/10 transition-colors duration-200'
        >
          Read more on X
        </a>
      </div>
    </article>
  );
}
