const faculties = [
  { id: 1, name: 'фмф', type: 'faculty' },
  { id: 2, name: 'егф', type: 'faculty' },
  { id: 3, name: 'ити', type: 'faculty' }
]

const educationLevels = [
  {
    id: 1,
    name: 'бакалавриат',
    type: 'educationLevel',
    courses: [
      { id: 1, name: '1 курс', type: 'course' },
      { id: 2, name: '2 курс', type: 'course' },
      { id: 3, name: '3 курс', type: 'course' },
      { id: 4, name: '4 курс', type: 'course' }
    ]
  },
  {
    id: 2,
    name: 'магистратура',
    type: 'educationLevel',
    courses: [
      { id: 1, name: '1 курс', type: 'course' },
      { id: 2, name: '2 курс', type: 'course' }
    ]
  },
  {
    id: 3,
    name: 'заочники',
    type: 'educationLevel',
    courses: [
      { id: 1, name: '1 курс', type: 'course' },
      { id: 2, name: '2 курс', type: 'course' },
      { id: 3, name: '3 курс', type: 'course' },
      { id: 4, name: '4 курс', type: 'course' },
      { id: 5, name: '5 курс', type: 'course' }
    ]
  }
]

export { faculties, educationLevels }
