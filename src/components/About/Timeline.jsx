const Timeline = () => {
    const events = [
      {
        year: '2018',
        title: 'Company Founded',
        description:'loremksdamfkadsmfkasfgbasjhgbdjhbgasdbgmsadnmgasdgmasd',
        image: 'https://via.placeholder.com/150', // Image URL for this event
      },
      {
        year: '2019',
        title: 'First Major Client',
        description:"loremksdamfkadsmfkasfgbasjhgbdjhbgasdbgmsadnmgasdgmasd",
        image: 'https://via.placeholder.com/150', // Image URL for this event
      },
      {
        year: '2020',
        title: 'Expansion',
        description:
          'loremksdamfkadsmfkasfgbasjhgbdjhbgasdbgmsadnmgasdgmasd',
        image: 'https://via.placeholder.com/150', // Image URL for this event
      },
      {
        year: '2021',
        title: ' Certification',
        description:
          'loremksdamfkadsmfkasfgbasjhgbdjhbgasdbgmsadnmgasdgmasd',
        image: 'https://via.placeholder.com/150', // Image URL for this event
      },
      {
        year: '2022',
        title: 'Tech Integration',
        description:
          'loremksdamfkadsmfkasfgbasjhgbdjhbgasdbgmsadnmgasdgmasd',
        image: 'https://via.placeholder.com/150', // Image URL for this event
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12 my-20">
        <h2 className="text-5xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative my-20">
          {events.map((event, index) => (
            <div
              className={`mb-10 ml-6 flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              key={index}
            >
              <div className="flex-shrink-0 w-1/3 p-4">
              </div>
              <div className="flex flex-col w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <time className="mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                  {event.year}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;
  