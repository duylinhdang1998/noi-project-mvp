import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Tag, Rate, Modal, Form, Input, Upload } from 'antd';
import {
  ArrowLeftOutlined,
  UploadOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import {
  Clock,
  MapPin,
  Calendar,
  Building,
  Code,
  Palette,
  Lightbulb,
  BarChart3,
  Globe,
  Briefcase,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  organization: string;
  organizationType: string;
  description: string;
  matchScore?: number;
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
  projectScope?: string[];
}

const StudentProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [applicationModalVisible, setApplicationModalVisible] = useState(false);
  const [applicationForm] = Form.useForm();

  // Mock project data - in real app, this would come from API
  const project: Project = {
    id: projectId || '1',
    title: 'Developing a Next-Gen AI-Powered Tutoring System',
    organization: 'InnovateEd Solutions',
    organizationType: 'Education Technology',
    description:
      'Join InnovateEd Solutions in a groundbreaking project to develop an AI-powered tutoring system aimed at revolutionizing personalized learning. This system will utilize advanced machine learning algorithms to adapt to individual student needs, provide real-time feedback, and generate custom learning paths. This is an excellent opportunity to gain hands-on experience in AI development, education technology, and agile project management, contributing to a product that will make a significant impact on global education.',
    deadline: 'October 31, 2024',
    duration: '6 Months (Full-time)',
    location: 'Remote / Hybrid (London Office)',
    type: 'hybrid',
    skills: [
      'Python',
      'Machine Learning',
      'Natural Language Processing',
      'React',
      'TypeScript',
      'AWS',
      'Data Science',
      'UI/UX Design',
    ],
    projectType: 'Development',
    rating: 4.8,
    projectScope: [
      'Natural Language Processing: Implement and refine conversational AI for interactive tutoring.',
      'Data Analytics & Machine Learning: Develop models for student performance tracking and adaptive learning paths.',
      'Front-end Development: Build an intuitive and engaging user interface using modern web technologies.',
      'API Integration: Connect various modules and external educational resources.',
    ],
    requirements: [
      'Strong programming skills in Python',
      'Experience with Natural Language Processing',
      'Knowledge of Machine Learning frameworks',
      'Familiarity with chatbot development platforms',
      'Understanding of educational technology',
      'Experience with React and modern web development',
    ],
    responsibilities: [
      'Implement and refine conversational AI for interactive tutoring',
      'Develop models for student performance tracking and adaptive learning paths',
      'Build an intuitive and engaging user interface using modern web technologies',
      'Connect various modules and external educational resources',
      'Collaborate with cross-functional teams',
      'Participate in agile development processes',
    ],
    benefits: [
      'Hands-on experience in AI development',
      'Mentorship from industry experts',
      'Certificate of completion',
      'Networking opportunities',
      'Potential for full-time employment',
      'Professional development workshops',
    ],
    aboutOrganization:
      'InnovateEd Solutions is a leading education technology company dedicated to creating accessible and effective learning tools. Our mission is to empower students worldwide through innovation, fostering a love for learning and enabling academic success. We believe in a collaborative and supportive work environment that encourages creativity and continuous growth. Our team comprises educators, engineers, and designers all working towards a common goal of transforming education for the better. We offer a dynamic work culture, opportunities for professional development, and the chance to contribute to meaningful projects.',
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Development':
        return <Code className='w-6 h-6 text-teal-600' />;
      case 'Design':
        return <Palette className='w-6 h-6 text-teal-600' />;
      case 'Research':
        return <Lightbulb className='w-6 h-6 text-teal-600' />;
      case 'Data Science':
        return <BarChart3 className='w-6 h-6 text-teal-600' />;
      case 'Marketing':
        return <Globe className='w-6 h-6 text-teal-600' />;
      default:
        return <Briefcase className='w-6 h-6 text-teal-600' />;
    }
  };

  const handleApplicationSubmit = (values: any) => {
    console.log('Application submitted:', values);
    setApplicationModalVisible(false);
    applicationForm.resetFields();
    // Add success message or redirect logic here
  };

  const handleApplyClick = () => {
    setApplicationModalVisible(true);
  };

  const handleBackClick = () => {
    navigate('/student/matching');
  };

  return (
    <div className='max-w-6xl mx-auto space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleBackClick}
          className='flex items-center'
        >
          Back to Projects
        </Button>
        <Button
          type='primary'
          size='large'
          onClick={handleApplyClick}
          className='bg-teal-500 hover:bg-teal-600 border-teal-500 px-8'
        >
          Apply Now
        </Button>
      </div>

      {/* Project Title and Organization */}
      <div className='bg-white rounded-lg p-6 shadow-sm'>
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center'>
              {getProjectIcon(project.projectType)}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                {project.title}
              </h1>
              <div className='flex items-center space-x-2 text-gray-600'>
                <Building className='w-5 h-5' />
                <span className='text-lg'>{project.organization}</span>
                <Rate
                  disabled
                  defaultValue={project.rating}
                  className='text-sm ml-4'
                />
                <span className='text-sm'>({project.rating})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Column - Project Details */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Project Overview */}
          <Card title='Project Overview' className='shadow-sm'>
            <p className='text-gray-700 leading-relaxed mb-6'>
              {project.description}
            </p>

            {project.projectScope && (
              <div>
                <h4 className='font-semibold text-gray-800 mb-3'>
                  Project Scope:
                </h4>
                <ul className='space-y-3'>
                  {project.projectScope.map((scope, index) => (
                    <li key={index} className='flex items-start space-x-3'>
                      <span className='text-teal-500 font-bold'>-</span>
                      <span className='text-gray-700'>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='mt-6 text-gray-700'>
              <p>
                We are looking for passionate and driven individuals who are
                eager to make a difference.
              </p>
            </div>
          </Card>

          {/* Required Skills */}
          <Card title='Required Skills' className='shadow-sm'>
            <div className='flex flex-wrap gap-3'>
              {project.skills.map((skill, index) => (
                <Tag key={index} color='green' className='px-3 py-1 text-sm'>
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>

          {/* About Organization */}
          <Card title={`About ${project.organization}`} className='shadow-sm'>
            <p className='text-gray-700 leading-relaxed mb-4'>
              {project.aboutOrganization}
            </p>
            <Button
              type='link'
              icon={<LinkOutlined />}
              className='text-teal-600 p-0'
            >
              View Organization Profile
            </Button>
          </Card>
        </div>

        {/* Right Column - Key Details */}
        <div className='space-y-6'>
          {/* Key Details Card */}
          <Card title='Key Details' className='shadow-sm'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3'>
                <Clock className='w-5 h-5 text-teal-600' />
                <div>
                  <div className='font-medium text-gray-800'>
                    {project.duration}
                  </div>
                  <div className='text-sm text-gray-500'>Duration</div>
                </div>
              </div>

              <div className='flex items-center space-x-3'>
                <MapPin className='w-5 h-5 text-teal-600' />
                <div>
                  <div className='font-medium text-gray-800'>
                    {project.location}
                  </div>
                  <div className='text-sm text-gray-500'>Location</div>
                </div>
              </div>

              <div className='flex items-center space-x-3'>
                <Calendar className='w-5 h-5 text-teal-600' />
                <div>
                  <div className='font-medium text-gray-800'>
                    {project.deadline}
                  </div>
                  <div className='text-sm text-gray-500'>
                    Application Deadline
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommended Projects Sidebar */}
          <Card title='Recommended Projects' className='shadow-sm'>
            <div className='space-y-4'>
              {[
                {
                  title: 'Healthcare AI Diagnostic Assistant',
                  organization: 'MediTech Innovations',
                  duration: '8 Months',
                },
                {
                  title: 'Sustainable Urban Planning Software',
                  organization: 'GreenFuture Labs',
                  duration: '5 Months',
                },
                {
                  title: 'Interactive Language Learning Platform',
                  organization: 'LinguaConnect',
                  duration: '7 Months',
                },
                {
                  title: 'Blockchain-based Supply Chain Tracker',
                  organization: 'ChainFlow Solutions',
                  duration: '6 Months',
                },
              ].map((rec, index) => (
                <div
                  key={index}
                  className='p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors'
                >
                  <h5 className='font-medium text-gray-800 text-sm mb-1 line-clamp-2'>
                    {rec.title}
                  </h5>
                  <p className='text-xs text-gray-600 mb-1'>
                    {rec.organization}
                  </p>
                  <p className='text-xs text-gray-500'>{rec.duration}</p>
                </div>
              ))}
            </div>
          </Card>
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
      </Modal>
    </div>
  );
};

export default StudentProjectDetailPage;
