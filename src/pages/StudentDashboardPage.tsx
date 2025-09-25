import { Card, Button, Tag } from 'antd';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const StudentDashboardPage = () => {
  const recommendedProjects = [
    {
      id: 1,
      title:
        'Student Mentorship Program: Guiding Newcomers to Academic Success',
      department: 'Student Affairs Office',
      image: '/public/banner.png',
      tags: ['Mentorship', 'Leadership', 'Interpersonal Skills'],
      deadline: '2025-01-10',
      type: 'mentorship',
    },
    {
      id: 2,
      title:
        'Student Mentorship Program: Guiding Newcomers to Academic Success',
      department: 'Student Affairs Office',
      image: '/public/J1.jpg',
      tags: ['Mentorship', 'Leadership', 'Interpersonal Skills'],
      deadline: '2025-01-10',
      type: 'mentorship',
    },
    {
      id: 3,
      title:
        'Student Mentorship Program: Guiding Newcomers to Academic Success',
      department: 'Student Affairs Office',
      image: '/public/banner.png',
      tags: ['Mentorship', 'Event Planning', 'Community Engagement'],
      deadline: '2025-01-10',
      type: 'community',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Project X Application',
      date: 'Dec 15, 2024',
    },
    {
      id: 2,
      title: 'Volunteer Sign-up for',
      date: 'Nov 30, 2024',
    },
    {
      id: 3,
      title: 'Research Grant',
      date: 'Dec 20, 2024',
    },
    {
      id: 4,
      title: 'Spring Semester',
      date: 'Jan 05, 2025',
    },
    {
      id: 5,
      title: 'Student Council',
      date: 'Jan 15, 2025',
    },
  ];

  const newOrganizations = [
    {
      id: 1,
      name: 'Green Campus Society',
      description: 'Promoting sustainability',
      avatar: '🌱',
    },
    {
      id: 2,
      name: 'AI Innovators Club',
      description: 'Exploring the latest',
      avatar: '🤖',
    },
    {
      id: 3,
      name: 'Global Culture Connect',
      description: 'Celebrating diversity and',
      avatar: '🌍',
    },
    {
      id: 4,
      name: 'Entrepreneurship Hub',
      description: 'Supporting student startups and innovative',
      avatar: '💼',
    },
  ];

  return (
    <div className='space-y-6'>
      {/* Recommended Projects Section */}
      <div>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>
          Recommended Projects
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {recommendedProjects.map((project) => (
            <Card
              key={project.id}
              className='shadow-sm hover:shadow-md transition-shadow duration-200'
              cover={
                <div className='h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden'>
                  {project.type === 'mentorship' ? (
                    <div className='text-center'>
                      <div className='text-6xl mb-2'>🌱</div>
                      <div className='text-sm text-gray-600'>
                        Mentorship Program
                      </div>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <div className='text-6xl mb-2'>👥</div>
                      <div className='text-sm text-gray-600'>
                        Community Engagement
                      </div>
                    </div>
                  )}
                </div>
              }
            >
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-gray-800 line-clamp-2'>
                  {project.title}
                </h3>

                <div className='flex items-center text-gray-600 text-sm'>
                  <EnvironmentOutlined className='mr-2' />
                  {project.department}
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, index) => (
                    <Tag key={index} color='blue' className='text-xs'>
                      {tag}
                    </Tag>
                  ))}
                </div>

                <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
                  <div className='flex items-center text-gray-600 text-sm'>
                    <CalendarOutlined className='mr-2' />
                    Deadline: {project.deadline}
                  </div>
                </div>

                <Button
                  type='primary'
                  className='w-full bg-teal-500 hover:bg-teal-600 border-teal-500'
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        {/* Upcoming Deadlines */}
        <div className='xl:col-span-1'>
          <Card
            title='Upcoming Deadlines'
            className='shadow-sm h-full'
            headStyle={{
              borderBottom: '1px solid #f0f0f0',
              paddingBottom: '12px',
            }}
          >
            <div className='space-y-4'>
              {upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
                >
                  <div className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-teal-500 rounded-full'></div>
                    <div>
                      <div className='font-medium text-gray-800 text-sm'>
                        {deadline.title}
                      </div>
                      <div className='text-xs text-gray-500'>
                        {deadline.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* New Organizations */}
        <div className='xl:col-span-2'>
          <Card
            title='New Organizations'
            className='shadow-sm h-full'
            headStyle={{
              borderBottom: '1px solid #f0f0f0',
              paddingBottom: '12px',
            }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {newOrganizations.map((org) => (
                <div
                  key={org.id}
                  className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm'>
                      {org.avatar}
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-800 text-sm mb-1'>
                        {org.name}
                      </h4>
                      <p className='text-xs text-gray-600 line-clamp-2'>
                        {org.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    type='link'
                    size='small'
                    icon={<EyeOutlined />}
                    className='text-teal-600 hover:text-teal-700'
                  >
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
