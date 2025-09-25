import { useState } from 'react';
import {
  Card,
  Tag,
  Button,
  Badge,
  Modal,
  Tabs,
  Progress,
  Avatar,
  Rate,
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  CheckCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import {
  Calendar,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
} from 'lucide-react';

const { TabPane } = Tabs;

interface Application {
  key: string;
  id: string;
  projectTitle: string;
  organization: string;
  appliedDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'in-review' | 'completed';
  deadline: string;
  description: string;
  location: string;
  duration: string;
  requirements: string[];
  benefits: string[];
  image: string;
  progress?: number;
  myRole?: string;
  myContributions?: string[];
  feedback?: {
    rating: number;
    comment: string;
    reviewer: string;
    date: string;
  };
  workDescription?: string;
  achievements?: string[];
}

const StudentMyApplicationsPage = () => {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const applications: Application[] = [
    {
      key: '1',
      id: 'APP-001',
      projectTitle:
        'Student Mentorship Program: Guiding Newcomers to Academic Success',
      organization: 'Student Affairs Office',
      appliedDate: '2024-12-01',
      status: 'approved',
      deadline: '2025-01-10',
      description:
        'Join our comprehensive mentorship program designed to help new students transition smoothly into university life. As a mentor, you will guide freshman students through their first year, providing academic support, social integration assistance, and personal development guidance.',
      location: 'Campus Wide',
      duration: '6 months',
      requirements: [
        'Leadership Skills',
        'Communication',
        'Academic Excellence (GPA > 3.5)',
      ],
      benefits: [
        'Leadership Certificate',
        'Community Service Hours',
        'Networking Opportunities',
      ],
      image: '/public/banner.png',
      progress: 75,
      myRole: 'Senior Student Mentor',
      myContributions: [
        'Mentored 5 freshman students throughout the semester',
        'Organized weekly study groups and academic workshops',
        'Developed peer support network within the dormitory',
        'Created resource guides for new student orientation',
      ],
      workDescription:
        'As a Senior Student Mentor, I have been responsible for guiding new students through their academic and social transition to university life. My primary focus has been on creating a supportive environment where students feel comfortable asking questions and seeking help.',
      achievements: [
        'Successfully mentored 5 students with 100% retention rate',
        'Improved mentee average GPA by 0.3 points',
        'Organized 12 successful study sessions with 40+ participants',
        'Received "Outstanding Mentor" recognition from Student Affairs',
      ],
      feedback: {
        rating: 5,
        comment:
          'Exceptional mentoring skills and dedication. John has shown remarkable leadership and has positively impacted many students. His approach is both professional and caring.',
        reviewer: 'Dr. Sarah Johnson - Student Affairs Director',
        date: '2024-12-15',
      },
    },
    {
      key: '2',
      id: 'APP-002',
      projectTitle: 'Green Campus Initiative',
      organization: 'Environmental Club',
      appliedDate: '2024-11-28',
      status: 'completed',
      deadline: '2024-12-15',
      description:
        'Lead sustainability efforts across campus by implementing eco-friendly practices, organizing awareness campaigns, and developing green infrastructure projects to reduce our environmental footprint.',
      location: 'University Campus',
      duration: '4 months',
      requirements: [
        'Environmental Awareness',
        'Project Management',
        'Team Leadership',
      ],
      benefits: [
        'Environmental Certificate',
        'Project Management Experience',
        'Community Impact',
      ],
      image: '/public/J1.jpg',
      progress: 100,
      myRole: 'Sustainability Coordinator',
      myContributions: [
        'Led campus-wide recycling awareness campaign',
        'Installed 15 new recycling stations across dormitories',
        'Organized Earth Day celebration with 200+ participants',
        'Reduced campus waste by 25% through awareness programs',
      ],
      workDescription:
        'As Sustainability Coordinator, I spearheaded multiple environmental initiatives aimed at making our campus more eco-friendly. My work focused on both infrastructure improvements and behavioral change through education and awareness.',
      achievements: [
        'Achieved 25% reduction in campus waste generation',
        'Successfully engaged 500+ students in sustainability programs',
        'Secured $5,000 funding for green infrastructure projects',
        'Established ongoing partnership with local recycling center',
      ],
      feedback: {
        rating: 5,
        comment:
          "Outstanding leadership in environmental initiatives. John's dedication and innovative approaches have made a lasting impact on our campus sustainability efforts.",
        reviewer: 'Prof. Michael Green - Environmental Science Dept.',
        date: '2024-12-20',
      },
    },
    {
      key: '3',
      id: 'APP-003',
      projectTitle: 'AI Innovation Workshop',
      organization: 'Tech Society',
      appliedDate: '2024-11-25',
      status: 'in-review',
      deadline: '2024-12-20',
      description:
        'Facilitate hands-on workshops introducing students to artificial intelligence concepts, machine learning applications, and emerging technologies in the field of computer science.',
      location: 'Computer Science Building',
      duration: '3 months',
      requirements: [
        'Python Programming',
        'AI/ML Knowledge',
        'Teaching Experience',
      ],
      benefits: [
        'Technical Skills Certificate',
        'Teaching Experience',
        'Industry Connections',
      ],
      image: '/public/logo.png',
      myRole: 'Workshop Facilitator',
      myContributions: [],
      workDescription:
        'Application under review - workshop facilitation role pending approval.',
      achievements: [],
    },
    {
      key: '4',
      id: 'APP-004',
      projectTitle: 'Campus Food Security Program',
      organization: 'Student Wellness Center',
      appliedDate: '2024-12-10',
      status: 'pending',
      deadline: '2025-02-01',
      description:
        'Address food insecurity among students by establishing a campus food pantry, organizing meal assistance programs, and creating awareness about available resources.',
      location: 'Student Center',
      duration: '8 months',
      requirements: ['Community Outreach', 'Organizational Skills', 'Empathy'],
      benefits: [
        'Community Service Certificate',
        'Social Impact Experience',
        'Leadership Development',
      ],
      image: '/public/banner.png',
      myRole: 'Program Coordinator',
      myContributions: [],
      workDescription:
        'Awaiting approval to begin coordination of campus-wide food security initiatives.',
      achievements: [],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'green';
      case 'completed':
        return 'blue';
      case 'rejected':
        return 'red';
      case 'in-review':
        return 'orange';
      case 'pending':
      default:
        return 'gold';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className='w-4 h-4' />;
      case 'completed':
        return <CheckCircleOutlined />;
      case 'rejected':
        return <XCircle className='w-4 h-4' />;
      case 'in-review':
        return <AlertCircle className='w-4 h-4' />;
      case 'pending':
      default:
        return <Clock className='w-4 h-4' />;
    }
  };

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setDetailModalVisible(true);
  };

  const getStatusCounts = () => {
    return applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const statusCounts = getStatusCounts();

  const ProjectDetailModal = () => (
    <Modal
      title={null}
      open={detailModalVisible}
      onCancel={() => setDetailModalVisible(false)}
      footer={null}
      width={800}
      className='project-detail-modal'
    >
      {selectedApplication && (
        <div className='space-y-6'>
          {/* Header */}
          <div className='flex items-start space-x-4'>
            <div className='w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center'>
              <TeamOutlined className='text-2xl text-teal-600' />
            </div>
            <div className='flex-1'>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                {selectedApplication.projectTitle}
              </h2>
              <div className='flex items-center space-x-4 text-sm text-gray-600'>
                <div className='flex items-center space-x-1'>
                  <MapPin className='w-4 h-4' />
                  <span>{selectedApplication.organization}</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <Calendar className='w-4 h-4' />
                  <span>{selectedApplication.appliedDate}</span>
                </div>
                <Tag
                  color={getStatusColor(selectedApplication.status)}
                  icon={getStatusIcon(selectedApplication.status)}
                  className='flex items-center space-x-1'
                >
                  {selectedApplication.status.replace('-', ' ').toUpperCase()}
                </Tag>
              </div>
            </div>
          </div>

          <Tabs defaultActiveKey='1'>
            {/* Project Overview */}
            <TabPane tab='Project Overview' key='1'>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Description
                  </h4>
                  <p className='text-gray-600'>
                    {selectedApplication.description}
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>Duration</h5>
                    <div className='flex items-center space-x-2'>
                      <Clock className='w-4 h-4 text-gray-500' />
                      <span className='text-gray-600'>
                        {selectedApplication.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>Location</h5>
                    <div className='flex items-center space-x-2'>
                      <MapPin className='w-4 h-4 text-gray-500' />
                      <span className='text-gray-600'>
                        {selectedApplication.location}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>Deadline</h5>
                    <div className='flex items-center space-x-2'>
                      <Calendar className='w-4 h-4 text-gray-500' />
                      <span className='text-gray-600'>
                        {selectedApplication.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>
                      Requirements
                    </h5>
                    <div className='space-y-1'>
                      {selectedApplication.requirements.map((req, index) => (
                        <Tag key={index} color='blue'>
                          {req}
                        </Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>Benefits</h5>
                    <div className='space-y-1'>
                      {selectedApplication.benefits.map((benefit, index) => (
                        <Tag key={index} color='green'>
                          {benefit}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedApplication.progress !== undefined && (
                  <div>
                    <h5 className='font-medium text-gray-700 mb-2'>Progress</h5>
                    <Progress
                      percent={selectedApplication.progress}
                      strokeColor='#10b981'
                      className='mb-2'
                    />
                    <span className='text-sm text-gray-600'>
                      {selectedApplication.progress}% Complete
                    </span>
                  </div>
                )}
              </div>
            </TabPane>

            {/* My Work */}
            {(selectedApplication.status === 'approved' ||
              selectedApplication.status === 'completed') && (
              <TabPane tab='My Work' key='2'>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      My Role
                    </h4>
                    <div className='flex items-center space-x-2'>
                      <UserOutlined className='text-teal-600' />
                      <span className='text-gray-700 font-medium'>
                        {selectedApplication.myRole}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      Work Description
                    </h4>
                    <p className='text-gray-600'>
                      {selectedApplication.workDescription}
                    </p>
                  </div>

                  {selectedApplication.myContributions &&
                    selectedApplication.myContributions.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-gray-800 mb-3'>
                          My Contributions
                        </h4>
                        <div className='space-y-2'>
                          {selectedApplication.myContributions.map(
                            (contribution, index) => (
                              <div
                                key={index}
                                className='flex items-start space-x-3'
                              >
                                <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                                <span className='text-gray-600'>
                                  {contribution}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {selectedApplication.achievements &&
                    selectedApplication.achievements.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-gray-800 mb-3'>
                          Key Achievements
                        </h4>
                        <div className='space-y-2'>
                          {selectedApplication.achievements.map(
                            (achievement, index) => (
                              <div
                                key={index}
                                className='flex items-start space-x-3'
                              >
                                <Award className='w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0' />
                                <span className='text-gray-600'>
                                  {achievement}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </TabPane>
            )}

            {/* Feedback */}
            {selectedApplication.feedback && (
              <TabPane tab='Feedback' key='3'>
                <div className='space-y-4'>
                  <div className='bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-start space-x-4'>
                      <Avatar size={48} className='bg-teal-500'>
                        {selectedApplication.feedback.reviewer
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </Avatar>
                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-2'>
                          <div>
                            <h5 className='font-medium text-gray-800'>
                              {selectedApplication.feedback.reviewer}
                            </h5>
                            <p className='text-sm text-gray-600'>
                              {selectedApplication.feedback.date}
                            </p>
                          </div>
                          <Rate
                            disabled
                            defaultValue={selectedApplication.feedback.rating}
                          />
                        </div>
                        <p className='text-gray-700'>
                          {selectedApplication.feedback.comment}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center p-4 bg-blue-50 rounded-lg'>
                      <div className='text-2xl font-bold text-blue-600'>
                        {selectedApplication.feedback.rating}/5
                      </div>
                      <div className='text-sm text-blue-700'>
                        Overall Rating
                      </div>
                    </div>
                    <div className='text-center p-4 bg-green-50 rounded-lg'>
                      <div className='text-2xl font-bold text-green-600'>
                        {selectedApplication.status === 'completed'
                          ? '100%'
                          : selectedApplication.progress + '%'}
                      </div>
                      <div className='text-sm text-green-700'>
                        Completion Rate
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            )}
          </Tabs>
        </div>
      )}
    </Modal>
  );

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-gray-800'>My Applications</h2>
        <div className='flex space-x-4'>
          <Badge count={statusCounts.pending || 0} color='gold'>
            <div className='px-4 py-2 bg-yellow-50 rounded-lg'>
              <span className='text-sm font-medium text-yellow-700'>
                Pending
              </span>
            </div>
          </Badge>
          <Badge count={statusCounts['in-review'] || 0} color='orange'>
            <div className='px-4 py-2 bg-orange-50 rounded-lg'>
              <span className='text-sm font-medium text-orange-700'>
                In Review
              </span>
            </div>
          </Badge>
          <Badge count={statusCounts.approved || 0} color='green'>
            <div className='px-4 py-2 bg-green-50 rounded-lg'>
              <span className='text-sm font-medium text-green-700'>
                Approved
              </span>
            </div>
          </Badge>
          <Badge count={statusCounts.completed || 0} color='blue'>
            <div className='px-4 py-2 bg-blue-50 rounded-lg'>
              <span className='text-sm font-medium text-blue-700'>
                Completed
              </span>
            </div>
          </Badge>
        </div>
      </div>

      {/* Applications Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {applications.map((application) => (
          <Card
            key={application.key}
            className='hover:shadow-lg transition-shadow duration-300 cursor-pointer'
            cover={
              <div className='h-48 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center relative'>
                <div className='text-center'>
                  <TeamOutlined className='text-4xl text-teal-600 mb-2' />
                  <div className='text-sm text-gray-600'>
                    {application.organization}
                  </div>
                </div>
                <div className='absolute top-3 right-3'>
                  <Tag
                    color={getStatusColor(application.status)}
                    icon={getStatusIcon(application.status)}
                    className='min-w-fit inline-flex gap-x-1 items-center font-medium'
                  >
                    {application.status.replace('-', ' ').toUpperCase()}
                  </Tag>
                </div>
              </div>
            }
            actions={[
              <Button
                type='link'
                icon={<Eye className='w-4 h-4' />}
                onClick={() => handleViewDetails(application)}
                key='view'
              >
                View Details
              </Button>,
              application.status === 'pending' && (
                <Button type='link' icon={<EditOutlined />} key='edit'>
                  Edit
                </Button>
              ),
              application.status === 'pending' && (
                <Button
                  type='link'
                  icon={<DeleteOutlined />}
                  key='delete'
                  danger
                >
                  Withdraw
                </Button>
              ),
            ].filter(Boolean)}
          >
            <div className='space-y-3'>
              <h3 className='font-semibold text-gray-800 line-clamp-2 min-h-[3rem]'>
                {application.projectTitle}
              </h3>

              <div className='space-y-2'>
                <div className='flex items-center text-gray-600 text-sm'>
                  <MapPin className='w-4 h-4 mr-2' />
                  {application.organization}
                </div>
                <div className='flex items-center text-gray-600 text-sm'>
                  <Calendar className='w-4 h-4 mr-2' />
                  Applied: {application.appliedDate}
                </div>
                <div className='flex items-center text-gray-600 text-sm'>
                  <Clock className='w-4 h-4 mr-2' />
                  Deadline: {application.deadline}
                </div>
              </div>

              {application.progress !== undefined && (
                <div>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Progress</span>
                    <span>{application.progress}%</span>
                  </div>
                  <Progress
                    percent={application.progress}
                    size='small'
                    strokeColor='#10b981'
                  />
                </div>
              )}

              {application.feedback && (
                <div className='flex items-center space-x-2'>
                  <Rate disabled defaultValue={application.feedback.rating} />
                  <span className='text-sm text-gray-600'>
                    ({application.feedback.rating}/5)
                  </span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <ProjectDetailModal />
    </div>
  );
};

export default StudentMyApplicationsPage;
