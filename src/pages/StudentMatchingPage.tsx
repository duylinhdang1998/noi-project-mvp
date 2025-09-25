import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Button,
  Tag,
  Modal,
  Form,
  Input,
  Upload,
  Checkbox,
  Rate,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  MapPin,
  Calendar,
  Clock,
  Building,
  Users,
  Code,
  Palette,
  Globe,
  BarChart3,
  Briefcase,
  Lightbulb,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  organization: string;
  organizationType: string;
  description: string;
  matchScore: number;
  deadline: string;
  duration: string;
  location: string;
  type: 'remote' | 'on-site' | 'hybrid';
  skills: string[];
  projectType:
    | 'Research'
    | 'Development'
    | 'Community Service'
    | 'Design'
    | 'Marketing'
    | 'Data Science';
  rating: number;
  applicants?: number;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  aboutOrganization: string;
}

const StudentMatchingPage = () => {
  const navigate = useNavigate();
  const [applicationModalVisible, setApplicationModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [applicationForm] = Form.useForm();
  const [filters, setFilters] = useState({
    skills: [] as string[],
    location: [] as string[],
    projectType: [] as string[],
    deadline: [] as string[],
  });

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Chatbot for Student Support',
      organization: 'EduBridge Innovators',
      organizationType: 'Education Technology',
      description:
        'Join EduBridge Innovators in a groundbreaking project to develop an AI-powered tutoring system aimed at revolutionizing personalized learning.',
      matchScore: 85,
      deadline: '2024-08-15',
      duration: '6 Months (Full-time)',
      location: 'Remote / Hybrid (London Office)',
      type: 'hybrid',
      skills: [
        'Python',
        'Natural Language Processing',
        'Machine Learning',
        'Dialogflow',
      ],
      projectType: 'Development',
      rating: 4.8,
      applicants: 12,
      requirements: [
        'Strong programming skills in Python',
        'Experience with Natural Language Processing',
        'Knowledge of Machine Learning frameworks',
        'Familiarity with chatbot development platforms',
      ],
      responsibilities: [
        'Implement and refine conversational AI for interactive tutoring',
        'Develop models for student performance tracking and adaptive learning paths',
        'Build an intuitive and engaging user interface using modern web technologies',
        'Connect various modules and external educational resources',
      ],
      benefits: [
        'Hands-on experience in AI development',
        'Mentorship from industry experts',
        'Certificate of completion',
        'Networking opportunities',
        'Potential for full-time employment',
      ],
      aboutOrganization:
        'InnovateEd Solutions is a leading education technology company dedicated to creating accessible and effective learning tools. Our mission is to empower students worldwide through innovation, fostering a love for learning and enabling academic success.',
    },
    {
      id: '2',
      title: 'Sustainable Urban Farming Design',
      organization: 'GreenFuture Solutions',
      organizationType: 'Environmental Organization',
      description:
        'Design sustainable urban farming solutions to promote food security and environmental consciousness in metropolitan areas.',
      matchScore: 78,
      deadline: '2024-09-01',
      duration: '4 Months',
      location: 'On-site: New York',
      type: 'on-site',
      skills: [
        'AutoCAD',
        'Environmental Science',
        'Community Engagement',
        'Permaculture',
      ],
      projectType: 'Design',
      rating: 4.6,
      applicants: 8,
      requirements: [
        'Knowledge of sustainable agriculture practices',
        'Experience with CAD software',
        'Understanding of environmental science principles',
        'Strong communication and community engagement skills',
      ],
      responsibilities: [
        'Design innovative urban farming systems',
        'Conduct community outreach and education programs',
        'Collaborate with local organizations and stakeholders',
        'Document and present project outcomes',
      ],
      benefits: [
        'Environmental impact certificate',
        'Community engagement experience',
        'Sustainable design portfolio development',
        'Professional networking in environmental sector',
      ],
      aboutOrganization:
        'GreenFuture Solutions focuses on creating sustainable environmental solutions for urban communities, promoting ecological awareness and practical sustainability practices.',
    },
    {
      id: '3',
      title: 'Interactive Web Dashboard for Climate Data',
      organization: 'Global Data Insights',
      organizationType: 'Data Analytics Firm',
      description:
        'Create an interactive web dashboard to visualize and analyze climate data for research and public awareness purposes.',
      matchScore: 92,
      deadline: '2024-08-20',
      duration: '5 Months',
      location: 'Remote',
      type: 'remote',
      skills: ['React', 'D3.js', 'API Integration', 'Data Visualization'],
      projectType: 'Development',
      rating: 4.9,
      applicants: 15,
      requirements: [
        'Proficiency in React and modern JavaScript',
        'Experience with data visualization libraries',
        'Understanding of API integration',
        'Knowledge of responsive web design',
      ],
      responsibilities: [
        'Develop interactive data visualization components',
        'Integrate multiple climate data APIs',
        'Implement responsive and accessible design',
        'Optimize performance for large datasets',
      ],
      benefits: [
        'Advanced web development experience',
        'Data visualization portfolio pieces',
        'Remote work experience',
        'Climate research contribution',
      ],
      aboutOrganization:
        'Global Data Insights specializes in making complex data accessible through innovative visualization and analysis tools, focusing on environmental and social impact data.',
    },
    {
      id: '4',
      title: 'Mobile App for Mental Wellness Tracking',
      organization: 'Mindful Tech Collective',
      organizationType: 'Health Technology',
      description:
        'Develop a mobile application focused on mental wellness tracking and support for college students.',
      matchScore: 65,
      deadline: '2024-09-10',
      duration: '4 Months',
      location: 'Hybrid',
      type: 'hybrid',
      skills: ['Flutter', 'Firebase', 'UX/UI Design', 'Psychology'],
      projectType: 'Development',
      rating: 4.5,
      applicants: 20,
      requirements: [
        'Mobile app development experience',
        'Understanding of UX/UI principles',
        'Knowledge of mental health considerations',
        'Experience with cloud platforms',
      ],
      responsibilities: [
        'Design and develop mobile app interface',
        'Implement wellness tracking features',
        'Ensure data privacy and security',
        'Conduct user testing and feedback integration',
      ],
      benefits: [
        'Mobile development experience',
        'Health technology exposure',
        'User research experience',
        'Social impact contribution',
      ],
      aboutOrganization:
        'Mindful Tech Collective creates technology solutions that support mental health and wellness, particularly for young adults and students.',
    },
    {
      id: '5',
      title: 'Blockchain-based Secure Voting System Prototype',
      organization: 'Veritas Protocol Labs',
      organizationType: 'Blockchain Technology',
      description:
        'Develop a prototype for a secure, transparent voting system using blockchain technology for student government elections.',
      matchScore: 68,
      deadline: '2024-08-25',
      duration: '3 Months',
      location: 'On-site: Berlin',
      type: 'on-site',
      skills: ['Solidity', 'Web3.js', 'Cryptography', 'Smart Contracts'],
      projectType: 'Research',
      rating: 4.7,
      applicants: 6,
      requirements: [
        'Understanding of blockchain fundamentals',
        'Smart contract development experience',
        'Cryptography knowledge',
        'Web3 development skills',
      ],
      responsibilities: [
        'Design secure voting smart contracts',
        'Implement blockchain integration',
        'Develop user-friendly voting interface',
        'Test system security and reliability',
      ],
      benefits: [
        'Blockchain development experience',
        'Cryptography practical application',
        'Security system design experience',
        'Innovation in democratic processes',
      ],
      aboutOrganization:
        'Veritas Protocol Labs focuses on developing secure, transparent blockchain solutions for governance and democratic processes.',
    },
  ];

  const skillOptions = [
    'Python',
    'React',
    'Machine Learning',
    'UX/UI Design',
    'Data Analysis',
    'Web Development',
    'Graphic Design',
    'Project Management',
    'AutoCAD',
    'Environmental Science',
    'Natural Language Processing',
    'D3.js',
    'API Integration',
    'Flutter',
    'Firebase',
    'Solidity',
    'Web3.js',
    'Cryptography',
  ];

  const locationOptions = [
    'Remote',
    'On-site: New York',
    'On-site: London',
    'On-site: Berlin',
    'Hybrid',
  ];

  const projectTypeOptions = [
    'Research',
    'Development',
    'Community Service',
    'Design',
    'Marketing',
    'Data Science',
  ];

  const deadlineOptions = [
    'Next 7 Days',
    'Next 30 Days',
    'Next 3 Months',
    'Anytime',
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Development':
        return <Code className='w-6 h-6' />;
      case 'Design':
        return <Palette className='w-6 h-6' />;
      case 'Research':
        return <Lightbulb className='w-6 h-6' />;
      case 'Data Science':
        return <BarChart3 className='w-6 h-6' />;
      case 'Marketing':
        return <Globe className='w-6 h-6' />;
      default:
        return <Briefcase className='w-6 h-6' />;
    }
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/student/project/${projectId}`);
  };

  const handleApplyClick = (project: Project) => {
    setSelectedProject(project);
    setApplicationModalVisible(true);
  };

  const handleApplicationSubmit = (values: any) => {
    console.log('Application submitted:', values);
    setApplicationModalVisible(false);
    applicationForm.resetFields();
    // Add success message or redirect logic here
  };

  const filteredProjects = projects.filter((project) => {
    if (
      filters.skills.length > 0 &&
      !filters.skills.some((skill) => project.skills.includes(skill))
    ) {
      return false;
    }
    if (
      filters.location.length > 0 &&
      !filters.location.includes(project.location)
    ) {
      return false;
    }
    if (
      filters.projectType.length > 0 &&
      !filters.projectType.includes(project.projectType)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className='flex gap-6'>
      {/* Filters Sidebar */}
      <div className='w-80 space-y-6'>
        <Card title='Filters' className='shadow-sm'>
          <div className='space-y-6'>
            {/* Skills Filter */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                <Code className='w-4 h-4 mr-2' />
                Skills
              </h4>
              <div className='space-y-2 max-h-40 overflow-y-auto'>
                {skillOptions.map((skill) => (
                  <Checkbox
                    key={skill}
                    checked={filters.skills.includes(skill)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters((prev) => ({
                          ...prev,
                          skills: [...prev.skills, skill],
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          skills: prev.skills.filter((s) => s !== skill),
                        }));
                      }
                    }}
                  >
                    {skill}
                  </Checkbox>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                <MapPin className='w-4 h-4 mr-2' />
                Location
              </h4>
              <div className='space-y-2'>
                {locationOptions.map((location) => (
                  <Checkbox
                    key={location}
                    checked={filters.location.includes(location)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters((prev) => ({
                          ...prev,
                          location: [...prev.location, location],
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          location: prev.location.filter((l) => l !== location),
                        }));
                      }
                    }}
                  >
                    {location}
                  </Checkbox>
                ))}
              </div>
            </div>

            {/* Project Type Filter */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                <Briefcase className='w-4 h-4 mr-2' />
                Project Type
              </h4>
              <div className='space-y-2'>
                {projectTypeOptions.map((type) => (
                  <Checkbox
                    key={type}
                    checked={filters.projectType.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters((prev) => ({
                          ...prev,
                          projectType: [...prev.projectType, type],
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          projectType: prev.projectType.filter(
                            (t) => t !== type
                          ),
                        }));
                      }
                    }}
                  >
                    {type}
                  </Checkbox>
                ))}
              </div>
            </div>

            {/* Deadline Filter */}
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                <Calendar className='w-4 h-4 mr-2' />
                Deadline
              </h4>
              <div className='space-y-2'>
                {deadlineOptions.map((deadline) => (
                  <Checkbox
                    key={deadline}
                    checked={filters.deadline.includes(deadline)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters((prev) => ({
                          ...prev,
                          deadline: [...prev.deadline, deadline],
                        }));
                      } else {
                        setFilters((prev) => ({
                          ...prev,
                          deadline: prev.deadline.filter((d) => d !== deadline),
                        }));
                      }
                    }}
                  >
                    {deadline}
                  </Checkbox>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-2xl font-bold text-gray-800'>
              Recommended Projects for You
            </h2>
            <p className='text-gray-600 mt-1'>
              Explore exciting opportunities tailored to your skills and
              interests.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className='hover:shadow-lg transition-shadow duration-300 cursor-pointer'
              bodyStyle={{ padding: '20px' }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className='space-y-4'>
                {/* Header */}
                <div className='flex items-start justify-between'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center'>
                      {getProjectIcon(project.projectType)}
                    </div>
                    <div>
                      <div className='flex items-center space-x-2'>
                        <Building className='w-4 h-4 text-gray-400' />
                        <span className='text-sm text-gray-600'>
                          {project.organization}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-teal-600'>
                      {project.matchScore}%
                    </div>
                    <div className='text-xs text-gray-500'>Match Score</div>
                  </div>
                </div>

                {/* Title and Skills */}
                <div>
                  <h3 className='font-bold text-gray-800 text-lg mb-2 line-clamp-2'>
                    {project.title}
                  </h3>
                  <div className='flex flex-wrap gap-1 mb-3'>
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <Tag key={index} color='blue' size='small'>
                        {skill}
                      </Tag>
                    ))}
                    {project.skills.length > 3 && (
                      <Tag size='small'>+{project.skills.length - 3} more</Tag>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className='space-y-2'>
                  <div className='flex items-center text-gray-600 text-sm'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>{project.location}</span>
                  </div>
                  <div className='flex items-center text-gray-600 text-sm'>
                    <Clock className='w-4 h-4 mr-2' />
                    <span>{project.duration}</span>
                  </div>
                  <div className='flex items-center text-gray-600 text-sm'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>Deadline: {project.deadline}</span>
                  </div>
                </div>

                {/* Rating and Applicants */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-1'>
                    <Rate
                      disabled
                      defaultValue={project.rating}
                      size='small'
                      className='text-xs'
                    />
                    <span className='text-sm text-gray-600'>
                      ({project.rating})
                    </span>
                  </div>
                  {project.applicants && (
                    <div className='flex items-center space-x-1 text-sm text-gray-600'>
                      <Users className='w-4 h-4' />
                      <span>{project.applicants} applied</span>
                    </div>
                  )}
                </div>

                {/* Apply Button */}
                <Button
                  type='primary'
                  className='w-full bg-teal-500 hover:bg-teal-600 border-teal-500'
                  onClick={() => handleApplyClick(project)}
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        title='Student Application'
        open={applicationModalVisible}
        onCancel={() => setApplicationModalVisible(false)}
        footer={null}
        width={600}
      >
        {selectedProject && (
          <div>
            <p className='text-gray-600 mb-6'>
              Fill out the form below to apply for the student program.
            </p>

            <Form
              form={applicationForm}
              layout='vertical'
              onFinish={handleApplicationSubmit}
            >
              <Form.Item
                label='Cover Letter'
                name='coverLetter'
                rules={[
                  { required: true, message: 'Please provide a cover letter' },
                ]}
              >
                <Input.TextArea
                  rows={6}
                  placeholder='Tell us about your interest and qualifications...'
                />
              </Form.Item>

              <Form.Item
                label='Upload CV'
                name='cv'
                rules={[{ required: true, message: 'Please upload your CV' }]}
              >
                <Upload
                  beforeUpload={() => false}
                  accept='.pdf,.doc,.docx'
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />} className='w-full'>
                    Choose File
                  </Button>
                </Upload>
                <div className='text-sm text-gray-500 mt-1'>
                  PDF, DOCX up to 5MB
                </div>
              </Form.Item>

              <div className='flex justify-end space-x-3 pt-4'>
                <Button onClick={() => setApplicationModalVisible(false)}>
                  Cancel
                </Button>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='bg-blue-500 hover:bg-blue-600 border-blue-500'
                >
                  Submit Application
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StudentMatchingPage;
