import Tweet from '@/components/Tweet';

export default function Twitter() {
  return (
    <div className='p-4'>
      <div className='border-b border-slate-700 pb-4 mb-10'>
        <h1 className='text-center font-bold text-2xl md:text-3xl'>
          X components (Twitter)
        </h1>
      </div>

      <Tweet />
    </div>
  );
}
