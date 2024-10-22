


function showSubCourses(course) {
  const subCourseContainer = document.getElementById('sub-course-container');
  subCourseContainer.innerHTML = '';

  if (course === 'computer') {
    const computerSubCourses = [
      { value: 'web-development', text: 'Web Development' },
      { value: 'web-press', text: 'Web Press' },
      { value: 'graphic-designing', text: 'Graphic Designing' },
      { value: 'ui-ux', text: 'UI/UX' },
      { value: 'textile', text: 'Textile' },
      { value: 'digital-marketing', text: 'Digital Marketing' },
      { value: 'e-commerce', text: 'E-Commerce' },
      

    ];

    const select = document.createElement('select');
    select.name = 'sub-course';
    select.className = 'short-select';

    computerSubCourses.forEach((subCourse) => {
      const option = document.createElement('option');
      option.value = subCourse.value;
      option.text = subCourse.text;
      select.appendChild(option);
    });

    subCourseContainer.appendChild(select);
  } else if (course === 'english') {
    const englishSubCourses = [
      { value: 'ielts', text: 'IELTS' },
      { value: 'english-advance', text: 'English Advance' },
      { value: 'english-intermediate', text: 'English Intermediate' },
      { value: 'english-pre-intermediate', text: 'English Pre-Intermediate' },
    ];

    const select = document.createElement('select');
    select.name = 'sub-course';
    select.className = 'short-select';

    englishSubCourses.forEach((subCourse) => {
      const option = document.createElement('option');
      option.value = subCourse.value;
      option.text = subCourse.text;
      select.appendChild(option);
    });

    subCourseContainer.appendChild(select);
  } else if (course === 'maths') {
    const mathsSubCourses = [
      { value: 'algebra', text: 'Algebra' },
      { value: 'statistics', text: 'Statistics' },
      { value: 'geometry', text: 'Geometry' },
      { value: 'calculus', text: 'Calculus' },
    ];

    const select = document.createElement('select');
    select.name = 'sub-course';
    select.className = 'short-select';

    mathsSubCourses.forEach((subCourse) => {
      const option = document.createElement('option');
      option.value = subCourse.value;
      option.text = subCourse.text;
      select.appendChild(option);
    });

    subCourseContainer.appendChild(select);
  }
}

