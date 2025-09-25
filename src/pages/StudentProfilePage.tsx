import { useState } from 'react';
import {
  Card,
  Form,
  Input,
  Button,
  Avatar,
  Progress,
  Divider,
  Tag,
  Upload,
  Rate,
  Modal,
  message,
  Tabs,
} from 'antd';
import {
  EditOutlined,
  CameraOutlined,
  UploadOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  FileText,
  Download,
  Star,
  Award,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import type { UploadFile } from 'antd/es/upload/interface';

const { TabPane } = Tabs;

const StudentProfilePage = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [portfolioModalVisible, setPortfolioModalVisible] = useState(false);
  const [cvFiles, setCvFiles] = useState<UploadFile[]>([
    {
      uid: '1',
      name: 'John_Doe_Resume_2024.pdf',
      status: 'done',
      url: '/mock-resume.pdf',
    },
  ]);

  const profileData = {
    name: 'John Doe',
    email: 'john.doe@student.edu',
    phone: '+1 (555) 123-4567',
    studentId: 'STU-2024-001',
    major: 'Computer Science',
    year: 'Senior',
    gpa: '3.8',
    address: '123 University Ave, College Town, ST 12345',
    bio: 'Passionate computer science student with interests in AI, web development, and student mentorship programs.',
    skills: ['JavaScript', 'React', 'Python', 'Machine Learning', 'Leadership'],
    completionPercentage: 85,
    joinDate: 'September 2021',
    rating: 4.5,
    totalReviews: 12,
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Web Application',
      description:
        'Full-stack e-commerce platform built with React and Node.js',
      image: '/public/banner.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://github.com/johndoe/ecommerce-app',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using natural language processing',
      image: '/public/J1.jpg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
      link: 'https://github.com/johndoe/ai-chatbot',
      date: '2023-11-20',
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'React Native app for tracking workouts and nutrition',
      image: '/public/logo.png',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: 'https://github.com/johndoe/fitness-tracker',
      date: '2023-08-10',
    },
  ];

  const ratings = [
    {
      id: 1,
      reviewer: 'Dr. Sarah Johnson',
      role: 'Computer Science Professor',
      rating: 5,
      comment:
        'Exceptional student with strong problem-solving skills and dedication to learning.',
      date: '2024-01-15',
      project: 'Advanced Algorithms Course',
    },
    {
      id: 2,
      reviewer: 'Mike Chen',
      role: 'Senior Developer at TechCorp',
      rating: 4,
      comment:
        'Great intern with excellent coding abilities and team collaboration.',
      date: '2023-12-10',
      project: 'Summer Internship Program',
    },
    {
      id: 3,
      reviewer: 'Lisa Rodriguez',
      role: 'Project Manager',
      rating: 5,
      comment:
        'Outstanding work on the student mentorship program. Highly recommended!',
      date: '2023-11-05',
      project: 'Student Mentorship Program',
    },
  ];

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('Profile updated:', values);
    setIsEditing(false);
    message.success('Profile updated successfully!');
  };

  const handleCvUpload = (info: {
    fileList: UploadFile[];
    file: { status: string; name: string };
  }) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-3); // Keep only last 3 files
    setCvFiles(fileList);

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const ProfileOverviewCard = () => (
    <Card className='shadow-sm'>
      <div className='text-center'>
        <div className='relative inline-block mb-6'>
          <Avatar
            size={120}
            src='/public/J1.jpg'
            className='border-4 border-gray-200'
          />
          <Button
            type='primary'
            shape='circle'
            icon={<CameraOutlined />}
            size='small'
            className='absolute bottom-2 right-2 bg-teal-500 hover:bg-teal-600 border-teal-500'
          />
        </div>

        <h3 className='text-2xl font-bold text-gray-800 mb-2'>
          {profileData.name}
        </h3>
        <p className='text-gray-600 mb-1 text-lg'>{profileData.major}</p>
        <p className='text-gray-500 mb-4'>
          {profileData.year} • Student ID: {profileData.studentId}
        </p>

        <div className='flex items-center justify-center space-x-2 mb-4'>
          <Rate
            disabled
            defaultValue={profileData.rating}
            className='text-sm'
          />
          <span className='text-gray-600'>
            ({profileData.totalReviews} reviews)
          </span>
        </div>

        <Divider />

        <div className='space-y-4 text-left'>
          <div className='flex items-center space-x-3'>
            <Mail className='w-4 h-4 text-gray-400' />
            <span className='text-sm text-gray-600'>{profileData.email}</span>
          </div>
          <div className='flex items-center space-x-3'>
            <Phone className='w-4 h-4 text-gray-400' />
            <span className='text-sm text-gray-600'>{profileData.phone}</span>
          </div>
          <div className='flex items-center space-x-3'>
            <MapPin className='w-4 h-4 text-gray-400' />
            <span className='text-sm text-gray-600'>{profileData.address}</span>
          </div>
          <div className='flex items-center space-x-3'>
            <Calendar className='w-4 h-4 text-gray-400' />
            <span className='text-sm text-gray-600'>
              Joined {profileData.joinDate}
            </span>
          </div>
        </div>

        <Divider />

        <div className='space-y-3'>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-600'>Profile Completion</span>
            <span className='text-sm font-medium text-gray-800'>
              {profileData.completionPercentage}%
            </span>
          </div>
          <Progress
            percent={profileData.completionPercentage}
            strokeColor='#10b981'
            size='small'
          />
        </div>
      </div>
    </Card>
  );

  const PortfolioSection = () => (
    <Card
      title={
        <div className='flex items-center space-x-2'>
          <Briefcase className='w-5 h-5 text-teal-600' />
          <span>Portfolio</span>
        </div>
      }
      className='shadow-sm'
      extra={
        <Button
          type='primary'
          icon={<PlusOutlined />}
          onClick={() => setPortfolioModalVisible(true)}
          className='bg-teal-500 hover:bg-teal-600 border-teal-500'
        >
          Add Project
        </Button>
      }
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            className='hover:shadow-md transition-shadow duration-200'
            cover={
              <div className='h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center'>
                <div className='text-center'>
                  <Briefcase className='w-12 h-12 text-gray-400 mx-auto mb-2' />
                  <div className='text-sm text-gray-600'>{item.title}</div>
                </div>
              </div>
            }
            actions={[
              <Button type='link' icon={<EyeOutlined />} key='view'>
                View
              </Button>,
              <Button type='link' icon={<EditOutlined />} key='edit'>
                Edit
              </Button>,
              <Button type='link' icon={<DeleteOutlined />} key='delete' danger>
                Delete
              </Button>,
            ]}
          >
            <Card.Meta
              title={
                <span className='text-sm font-semibold'>{item.title}</span>
              }
              description={
                <div className='space-y-3'>
                  <p className='text-xs text-gray-600 line-clamp-2'>
                    {item.description}
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {item.technologies.map((tech, index) => (
                      <Tag key={index} color='blue'>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                  <div className='text-xs text-gray-500'>
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </Card>
  );

  const CVSection = () => (
    <Card
      title={
        <div className='flex items-center space-x-2'>
          <FileText className='w-5 h-5 text-teal-600' />
          <span>CV / Resume</span>
        </div>
      }
      className='shadow-sm'
    >
      <div className='space-y-4'>
        <Upload
          fileList={cvFiles}
          onChange={handleCvUpload}
          beforeUpload={() => false}
          accept='.pdf,.doc,.docx'
          className='w-full'
        >
          <Button icon={<UploadOutlined />} className='w-full'>
            Upload CV/Resume
          </Button>
        </Upload>

        {cvFiles.length > 0 && (
          <div className='space-y-3'>
            <h4 className='font-medium text-gray-800'>Uploaded Files:</h4>
            {cvFiles.map((file) => (
              <div
                key={file.uid}
                className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
              >
                <div className='flex items-center space-x-3'>
                  <FileText className='w-5 h-5 text-red-500' />
                  <div>
                    <div className='font-medium text-gray-800 text-sm'>
                      {file.name}
                    </div>
                    <div className='text-xs text-gray-500'>PDF Document</div>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    type='link'
                    icon={<Download className='w-4 h-4' />}
                    size='small'
                    className='text-teal-600'
                  >
                    Download
                  </Button>
                  <Button
                    type='link'
                    icon={<DeleteOutlined />}
                    size='small'
                    danger
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );

  const RatingsSection = () => (
    <Card
      title={
        <div className='flex items-center space-x-2'>
          <Star className='w-5 h-5 text-teal-600' />
          <span>Ratings & Reviews</span>
        </div>
      }
      className='shadow-sm'
    >
      <div className='mb-6 p-4 bg-gray-50 rounded-lg'>
        <div className='flex items-center justify-between'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-gray-800'>
              {profileData.rating}
            </div>
            <Rate disabled defaultValue={profileData.rating} />
            <div className='text-sm text-gray-600 mt-1'>
              {profileData.totalReviews} reviews
            </div>
          </div>
          <div className='flex-1 ml-8'>
            <div className='space-y-2'>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className='flex items-center space-x-2'>
                  <span className='text-sm w-2'>{star}</span>
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />
                  <Progress
                    percent={
                      star === 5 ? 70 : star === 4 ? 25 : star === 3 ? 5 : 0
                    }
                    size='small'
                    className='flex-1'
                    strokeColor='#fbbf24'
                  />
                  <span className='text-sm text-gray-600 w-8'>
                    {star === 5
                      ? '8'
                      : star === 4
                      ? '3'
                      : star === 3
                      ? '1'
                      : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        {ratings.map((rating) => (
          <div
            key={rating.id}
            className='border-b border-gray-100 pb-4 last:border-b-0'
          >
            <div className='flex items-start space-x-4'>
              <Avatar size={40} className='bg-teal-500'>
                {rating.reviewer
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </Avatar>
              <div className='flex-1'>
                <div className='flex items-center justify-between mb-2'>
                  <div>
                    <div className='font-medium text-gray-800'>
                      {rating.reviewer}
                    </div>
                    <div className='text-sm text-gray-600'>{rating.role}</div>
                  </div>
                  <div className='text-right'>
                    <Rate disabled defaultValue={rating.rating} />
                    <div className='text-xs text-gray-500'>{rating.date}</div>
                  </div>
                </div>
                <p className='text-gray-700 text-sm mb-2'>{rating.comment}</p>
                <div className='flex items-center space-x-2'>
                  <Award className='w-4 h-4 text-teal-500' />
                  <span className='text-xs text-gray-600'>
                    {rating.project}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const ProfileFormSection = () => (
    <Card title='Profile Information' className='shadow-sm'>
      <Form
        form={form}
        layout='vertical'
        initialValues={profileData}
        onFinish={handleSubmit}
        className='space-y-4'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Form.Item
            label='Full Name'
            name='name'
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder='Enter your full name' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder='Enter your email' />
          </Form.Item>

          <Form.Item
            label='Phone Number'
            name='phone'
            rules={[
              { required: true, message: 'Please enter your phone number' },
            ]}
          >
            <Input placeholder='Enter your phone number' />
          </Form.Item>

          <Form.Item
            label='Student ID'
            name='studentId'
            rules={[
              { required: true, message: 'Please enter your student ID' },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label='Major'
            name='major'
            rules={[{ required: true, message: 'Please enter your major' }]}
          >
            <Input placeholder='Enter your major' />
          </Form.Item>

          <Form.Item
            label='Academic Year'
            name='year'
            rules={[{ required: true, message: 'Please select your year' }]}
          >
            <Input placeholder='Enter your academic year' />
          </Form.Item>

          <Form.Item label='GPA' name='gpa'>
            <Input placeholder='Enter your GPA' />
          </Form.Item>
        </div>

        <Form.Item label='Address' name='address'>
          <Input.TextArea rows={2} placeholder='Enter your address' />
        </Form.Item>

        <Form.Item label='Bio' name='bio'>
          <Input.TextArea
            rows={4}
            placeholder='Tell us about yourself'
            showCount
            maxLength={500}
          />
        </Form.Item>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-3'>
            Skills
          </label>
          <div className='flex flex-wrap gap-2'>
            {profileData.skills.map((skill, index) => (
              <Tag key={index} color='blue' className='mb-2'>
                {skill}
              </Tag>
            ))}
            <Button type='dashed' size='small' className='mb-2'>
              + Add Skill
            </Button>
          </div>
        </div>

        <div className='flex justify-end space-x-4 pt-6'>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          <Button
            type='primary'
            htmlType='submit'
            className='bg-teal-500 hover:bg-teal-600 border-teal-500'
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </Card>
  );

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-gray-800'>My Profile</h2>
        <Button
          type='primary'
          icon={<EditOutlined />}
          onClick={() => setIsEditing(!isEditing)}
          className='bg-teal-500 hover:bg-teal-600 border-teal-500'
        >
          {isEditing ? 'Cancel Edit' : 'Edit Profile'}
        </Button>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
        {/* Profile Overview - Left Sidebar */}
        <div className='xl:col-span-1'>
          <ProfileOverviewCard />
        </div>

        {/* Main Content */}
        <div className='xl:col-span-3 space-y-6'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Profile Info' key='1'>
              <ProfileFormSection />
            </TabPane>
            <TabPane tab='Portfolio' key='2'>
              <PortfolioSection />
            </TabPane>
            <TabPane tab='CV/Resume' key='3'>
              <CVSection />
            </TabPane>
            <TabPane tab='Ratings & Reviews' key='4'>
              <RatingsSection />
            </TabPane>
          </Tabs>
        </div>
      </div>

      {/* Portfolio Modal */}
      <Modal
        title='Add New Project'
        open={portfolioModalVisible}
        onCancel={() => setPortfolioModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form layout='vertical'>
          <Form.Item label='Project Title' required>
            <Input placeholder='Enter project title' />
          </Form.Item>
          <Form.Item label='Description' required>
            <Input.TextArea rows={3} placeholder='Describe your project' />
          </Form.Item>
          <Form.Item label='Technologies Used'>
            <Input placeholder='React, Node.js, MongoDB...' />
          </Form.Item>
          <Form.Item label='Project Link'>
            <Input placeholder='https://github.com/...' />
          </Form.Item>
          <div className='flex justify-end space-x-3'>
            <Button onClick={() => setPortfolioModalVisible(false)}>
              Cancel
            </Button>
            <Button
              type='primary'
              className='bg-teal-500 hover:bg-teal-600 border-teal-500'
            >
              Add Project
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default StudentProfilePage;
