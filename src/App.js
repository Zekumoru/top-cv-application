import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';
import ListContainer from './components/ListContainer';
import { nanoid } from 'nanoid';
import './styles/App.scss';
import CVViewer from './components/CVViewer';
import CV from './components/CV';
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_NUMBER_REGEX =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const print = () => {
  window.print();
};

const validate = (input, type) => {
  if (type === 'text') {
    return input !== '';
  } else if (type === 'email') {
    return EMAIL_REGEX.test(input);
  } else if (type === 'tel') {
    return PHONE_NUMBER_REGEX.test(input);
  }
  return true;
};

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [aggressiveFirstName, setAggressiveFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [aggressiveLastName, setAggressiveLastName] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [aggressiveEmail, setAggressiveEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [aggressivePhoneNumber, setAggressivePhoneNumber] = useState(false);
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [validTitleOfStudy, setValidTitleOfStudy] = useState(false);
  const [showErrorTitleOfStudy, setShowErrorTitleOfStudy] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [validSchoolName, setValidSchoolName] = useState(false);
  const [showErrorSchoolName, setShowErrorSchoolName] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [validCompanyName, setValidCompanyName] = useState(false);
  const [showErrorCompanyName, setShowErrorCompanyName] = useState(false);
  const [positionTitle, setPositionTitle] = useState('');
  const [validPositionTitle, setValidPositionTitle] = useState(false);
  const [showErrorPositionTitle, setShowErrorPositionTitle] = useState(false);
  const [mainTask, setMainTask] = useState('');
  const [validMainTask, setValidMainTask] = useState(false);
  const [showErrorMainTask, setShowErrorMainTask] = useState(false);
  const [fromYear, setFromYear] = useState(currentYear);
  const [toYear, setToYear] = useState(currentYear);
  const [educations, setEducations] = useState([]);
  const [mainTasks, setMainTasks] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(scrollToTop, [currentPageIndex]);

  const placeholder = {
    firstName: 'John',
    lastName: 'Mueller',
    email: 'john.mueller@email.com',
    phoneNumber: '(123) 456-7890',
    titleOfStudy: 'B.S. Computer Science',
    schoolName: 'Stanford University',
    companyName: 'Facebook',
    positionTitle: 'Web Developer',
    mainTask: 'Developed documentation for ReactJS',
    educations: [
      {
        id: nanoid(),
        titleOfStudy: 'M.A. Mathematics',
        schoolName: 'Stanford University',
        fromYear: 2012,
        toYear: 2014,
      },
      {
        id: nanoid(),
        titleOfStudy: 'B.S. Computer Science',
        schoolName: 'Stanford University',
        fromYear: 2009,
        toYear: 2012,
      },
    ],
    workExperiences: [
      {
        id: nanoid(),
        positionTitle: 'Web Developer',
        companyName: 'Facebook',
        fromYear: 2019,
        toYear: 2022,
        mainTasks: [
          {
            id: nanoid(),
            task: 'Coached 4 junior designers in ReactJS and Redux.',
          },
          {
            id: nanoid(),
            task: 'Created and oversaw wireframe designs from client requests.',
          },
          {
            id: nanoid(),
            task: 'Developed documentation to teach new team members company standards and best practices in ReactJS and NodeJS.',
          },
        ],
      },
      {
        id: nanoid(),
        positionTitle: 'Coca-Cola',
        companyName: 'Web Designer',
        fromYear: 2017,
        toYear: 2019,
        mainTasks: [
          {
            id: nanoid(),
            task: 'Built landing pages mock designs and wireframes for new product concepts.',
          },
          {
            id: nanoid(),
            task: 'Created accessible, responsive, and functional user interfaces.',
          },
          {
            id: nanoid(),
            task: 'Created the user experience that fetched, parsed, and formatted analytic data, and relayed it into React components.',
          },
        ],
      },
      {
        id: nanoid(),
        positionTitle: 'Creative Designs',
        companyName: 'Web Development Intern',
        fromYear: 2016,
        toYear: 2017,
        mainTasks: [
          {
            id: nanoid(),
            task: 'Developed UI with modern JavaScript frameworks, HTML5, and CSS3 which improved user satisfaction by 40%.',
          },
          {
            id: nanoid(),
            task: 'Developed object-oriented code in NodeJS with 100% accordance to industry and company standards.',
          },
          {
            id: nanoid(),
            task: 'Learned asynchronicity, design patterns, and multi-threading, and their impact on the application.',
          },
        ],
      },
    ],
  };

  const onChange = ({ type, value, key }) => {
    switch (key) {
      case 'firstName':
        setFirstName(value);
        setValidFirstName(validate(value, type));
        break;
      case 'lastName':
        setLastName(value);
        setValidLastName(validate(value, type));
        break;
      case 'email':
        setEmail(value);
        setValidEmail(validate(value, type));
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        setValidPhoneNumber(validate(value, type));
        break;
      case 'titleOfStudy':
        setTitleOfStudy(value);
        setValidTitleOfStudy(validate(value, type));
        setShowErrorTitleOfStudy(false);
        break;
      case 'schoolName':
        setSchoolName(value);
        setValidSchoolName(validate(value, type));
        setShowErrorSchoolName(false);
        break;
      case 'companyName':
        setCompanyName(value);
        setValidCompanyName(validate(value, type));
        setShowErrorCompanyName(false);
        break;
      case 'positionTitle':
        setPositionTitle(value);
        setValidPositionTitle(validate(value, type));
        setShowErrorPositionTitle(false);
        break;
      case 'mainTask':
        setMainTask(value);
        setValidMainTask(validate(value, type));
        setShowErrorMainTask(false);
        break;
      case 'fromYear':
        setFromYear(value);
        setToYear(value);
        break;
      case 'toYear':
        setToYear(value);
        break;
      default:
        throw new SyntaxError(`Invalid input with key: ${key}`);
    }
  };

  const onBlur = ({ key }) => {
    switch (key) {
      case 'firstName':
        setAggressiveFirstName(true);
        break;
      case 'lastName':
        setAggressiveLastName(true);
        break;
      case 'email':
        setAggressiveEmail(true);
        break;
      case 'phoneNumber':
        setAggressivePhoneNumber(true);
        break;
      case 'titleOfStudy':
        setShowErrorTitleOfStudy(false);
        break;
      case 'schoolName':
        setShowErrorSchoolName(false);
        break;
      case 'companyName':
        setShowErrorCompanyName(false);
        break;
      case 'positionTitle':
        setShowErrorPositionTitle(false);
        break;
      case 'mainTask':
        setShowErrorMainTask(false);
        break;
      case 'fromYear':
      case 'toYear':
        break;
      default:
        throw new SyntaxError(`Invalid input with key: ${key}`);
    }
  };

  const previousPage = (e) => {
    if (finished) {
      setCurrentPageIndex(2);
      setFinished(false);
      return;
    }

    const pageIndex = currentPageIndex - 1;
    if (pageIndex < 0) return;

    setCurrentPageIndex(pageIndex);
    e.preventDefault();
  };

  const nextPage = (e) => {
    if (
      currentPageIndex === 0 &&
      (!validFirstName || !validLastName || !validEmail || !validPhoneNumber)
    ) {
      setAggressiveFirstName(true);
      setAggressiveLastName(true);
      setAggressiveEmail(true);
      setAggressivePhoneNumber(true);
      return;
    }

    const pageIndex = currentPageIndex + 1;
    if (pageIndex >= pages.length) {
      setFinished(true);
      return;
    }

    setCurrentPageIndex(pageIndex);
    e.preventDefault();
  };

  const addEducation = () => {
    if (!validTitleOfStudy || !validSchoolName) {
      setShowErrorTitleOfStudy(!validTitleOfStudy);
      setShowErrorSchoolName(!validSchoolName);
      return;
    }

    setEducations([
      ...educations,
      {
        id: nanoid(),
        fromYear: Number(fromYear),
        toYear: Number(toYear),
        titleOfStudy,
        schoolName,
      },
    ]);

    setValidTitleOfStudy(false);
    setShowErrorTitleOfStudy(false);
    setValidSchoolName(false);
    setShowErrorSchoolName(false);

    setTitleOfStudy('');
    setSchoolName('');
    setFromYear(currentYear);
    setToYear(currentYear);
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((e) => e.id !== id));
  };

  const addTask = () => {
    if (!validMainTask) {
      showErrorMainTask(!validMainTask);
      return;
    }

    setMainTasks([
      ...mainTasks,
      {
        id: nanoid(),
        task: mainTask,
      },
    ]);

    setValidMainTask(false);
    setShowErrorMainTask(false);
    setMainTask('');
  };

  const deleteTask = (id) => {
    setMainTasks(mainTasks.filter((t) => t.id !== id));
  };

  const addWorkExperience = () => {
    if (!validCompanyName || !validPositionTitle) {
      setShowErrorCompanyName(!validCompanyName);
      setShowErrorPositionTitle(!validPositionTitle);
      return;
    }

    setWorkExperiences([
      ...workExperiences,
      {
        id: nanoid(),
        fromYear: Number(fromYear),
        toYear: Number(toYear),
        companyName,
        positionTitle,
        mainTasks,
      },
    ]);

    setValidCompanyName(false);
    setValidPositionTitle(false);

    setCompanyName('');
    setPositionTitle('');
    setMainTasks([]);
    setFromYear(currentYear);
    setToYear(currentYear);
  };

  const deleteWorkExperience = (id) => {
    setWorkExperiences(workExperiences.filter((w) => w.id !== id));
  };

  const pages = [
    {
      title: 'Personal Details',
      content: (
        <div className="content">
          <LabeledInput
            id="first-name"
            label="First Name"
            type="text"
            placeholder={placeholder.firstName}
            onChange={onChange}
            onBlur={onBlur}
            value={firstName}
            valid={validFirstName}
            aggressiveValidation={aggressiveFirstName}
            errorText="First name cannot be empty!"
          />
          <LabeledInput
            id="last-name"
            label="Last Name"
            type="text"
            placeholder={placeholder.lastName}
            onChange={onChange}
            onBlur={onBlur}
            value={lastName}
            valid={validLastName}
            aggressiveValidation={aggressiveLastName}
            errorText="Last name cannot be empty!"
          />
          <LabeledInput
            id="email"
            label="Email"
            type="email"
            placeholder={placeholder.email}
            onChange={onChange}
            onBlur={onBlur}
            value={email}
            valid={validEmail}
            aggressiveValidation={aggressiveEmail}
            errorText="Email must be valid!"
          />
          <LabeledInput
            id="phone-number"
            label="Phone Number"
            type="tel"
            placeholder={placeholder.phoneNumber}
            onChange={onChange}
            onBlur={onBlur}
            value={phoneNumber}
            valid={validPhoneNumber}
            aggressiveValidation={aggressivePhoneNumber}
            errorText="Phone number must be valid!"
          />
        </div>
      ),
    },
    {
      title: 'Education',
      content: (
        <div className="content">
          <LabeledInput
            id="title-of-study"
            label="Title of Study"
            type="text"
            placeholder={placeholder.titleOfStudy}
            onChange={onChange}
            onBlur={onBlur}
            value={titleOfStudy}
            valid={validTitleOfStudy}
            showError={showErrorTitleOfStudy}
            errorText="Title of study cannot be empty!"
          />
          <LabeledInput
            id="school-name"
            label="School Name"
            type="text"
            placeholder={placeholder.schoolName}
            onChange={onChange}
            onBlur={onBlur}
            value={schoolName}
            valid={validSchoolName}
            showError={showErrorSchoolName}
            errorText="School name cannot be empty!"
          />
          <LabeledInput
            id="from-year"
            label="From"
            type="dropdown"
            rangeFrom={1920}
            rangeTo={new Date().getFullYear()}
            onChange={onChange}
            value={fromYear}
          />
          <LabeledInput
            id="to-year"
            label="To"
            type="dropdown"
            rangeFrom={fromYear}
            rangeTo={new Date().getFullYear()}
            onChange={onChange}
            value={toYear}
          />
          <button onClick={addEducation}>Add</button>
          <ListContainer
            list={educations}
            type="education"
            emptyText="No education added yet."
            onDelete={deleteEducation}
          />
        </div>
      ),
    },
    {
      title: 'Work Experience',
      content: (
        <div className="content">
          <LabeledInput
            id="company-name"
            label="Company Name"
            type="text"
            placeholder={placeholder.companyName}
            onChange={onChange}
            onBlur={onBlur}
            value={companyName}
            valid={validCompanyName}
            showError={showErrorCompanyName}
            errorText="Company name must not be empty!"
          />
          <LabeledInput
            id="position-title"
            label="Position Title"
            type="text"
            placeholder={placeholder.positionTitle}
            onChange={onChange}
            onBlur={onBlur}
            value={positionTitle}
            valid={validPositionTitle}
            showError={showErrorPositionTitle}
            errorText="Position title must not be empty!"
          />
          <LabeledInput
            id="main-task"
            label="Main Tasks"
            type="text"
            placeholder={placeholder.mainTask}
            onChange={onChange}
            onEnter={addTask}
            onBlur={onBlur}
            value={mainTask}
            valid={validMainTask}
            showError={showErrorMainTask}
            errorText="Type in a task!"
          />
          <button onClick={addTask}>Add Task</button>
          <ListContainer
            list={mainTasks}
            type="task"
            emptyText="No tasks added yet."
            onDelete={deleteTask}
          />
          <LabeledInput
            id="from-year"
            label="From"
            type="dropdown"
            rangeFrom={1920}
            rangeTo={new Date().getFullYear()}
            onChange={onChange}
            value={fromYear}
          />
          <LabeledInput
            id="to-year"
            label="To"
            type="dropdown"
            rangeFrom={fromYear}
            rangeTo={new Date().getFullYear()}
            onChange={onChange}
            value={toYear}
          />
          <button onClick={addWorkExperience}>Add Work Experience</button>
          <ListContainer
            list={workExperiences}
            type="work-experience"
            emptyText="No experiences added yet."
            onDelete={deleteWorkExperience}
          />
        </div>
      ),
    },
  ];

  const { title, content } = pages[currentPageIndex];

  const main = finished ? (
    <div className="congratulations main">
      <h1>Congratulations!</h1>
      <p>You have finished creating your personal CV!</p>
      <p>
        You may print it now! Use A4 size.{' '}
        {
          '(The button below might not work on mobile so use the print button on your browser.)'
        }
      </p>
      <button className="primary" onClick={print}>
        Print
      </button>
      <p>Found a mistake? Go back to fix it!</p>
      <button onClick={previousPage}>Prev</button>
    </div>
  ) : (
    <Form
      className="main"
      title={title}
      content={content}
      pageIndex={currentPageIndex}
      lastPage={currentPageIndex === pages.length - 1}
      onPreviousPage={previousPage}
      onNextPage={nextPage}
      onSubmit={(e) => e.preventDefault()}
    />
  );

  const data = {
    firstName,
    lastName,
    email,
    phoneNumber,
    titleOfStudy,
    schoolName,
    companyName,
    positionTitle,
    educations,
    workExperiences,
    placeholder,
  };

  return (
    <div className="App">
      <TopNavBar />
      {main}
      <div className="preview">
        <h2>Preview</h2>
        <CVViewer data={data} />
      </div>
      <CV data={data} />
      <Footer />
    </div>
  );
}

export default App;
