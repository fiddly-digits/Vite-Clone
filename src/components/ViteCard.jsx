export default function (props) {
  const { icon, title, content } = props;
  return (
    <div className='card py-6 h-48 w-80 mb-6 bg-neutral-700 rounded-xl shadow-lg sm:flex sm:flex-col sm:space-y-0 sm:space-x-6'>
      <div className='p-6'>
        <i className='bg-black rounded-xl p-2'>{icon}</i>
      </div>
      <h2 className='font-medium'>{title}</h2>
      <p className='font-thin text-sm'>{content}</p>
    </div>
  );
}
