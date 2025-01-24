const Timeline = () => {
  const milestones = [
    {
      year: '2017',
      title: 'Idea Conception',
      description:
        'Brainstorming and generating the initial concept of the project.',
    },
    {
      year: '2018',
      title: 'Prototype Development',
      description:
        'Developing the first version of the product for internal testing.',
    },
    {
      year: '2019',
      title: 'Initial Launch',
      description: 'Launching the product to a small audience for feedback.',
    },
    {
      year: '2020',
      title: 'Growth Phase',
      description: 'Expanding the user base and improving product features.',
    },
    {
      year: '2021',
      title: 'Scaling the Platform',
      description:
        'Increasing infrastructure capacity and improving performance.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description:
        'Launching the platform internationally and entering new markets.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Project Timeline</h2>
      <div className="relative my-20">
        {milestones.map((milestone, index) => (
          <div
            className={`mb-10 ml-6 flex ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            key={index}
          >
            <div className="flex-shrink-0 w-1/3 p-4">
            </div>
            <div className="flex flex-col w-2/3 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
              <time className="mb-2 text-sm font-normal text-blue-500 dark:text-gray-500">
                {milestone.year}
              </time>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-white">
                {milestone.title}
              </h3>
              <p className="text-base font-normal text-blue-600 dark:text-gray-400">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
