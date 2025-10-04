export const questions = {
  HTML: {
    topic: 'HTML',
    questions: [
      {
        question: 'What does HTML stand for?',
        correctAnswer: 'HyperText Markup Language',
        answerChoices: [
          'HyperText Markup Language',
          'Hyperlinks and Text Markup Language',
          'Home Tool Markup Language',
          'Hyper Tool Multi Language'
        ]
      },
      {
        question: 'Which tag is used to create a link in HTML?',
        correctAnswer: '<a>',
        answerChoices: ['<link>', '<a>', '<href>', '<url>']
      },
      {
        question: 'Which tag is used for a paragraph in HTML?',
        correctAnswer: '<p>',
        answerChoices: ['<p>', '<paragraph>', '<text>', '<para>']
      },
      {
        question: 'Which attribute is used to specify an image source?',
        correctAnswer: 'src',
        answerChoices: ['href', 'link', 'src', 'img']
      },
      {
        question: 'Which HTML tag is used to make a list with bullets?',
        correctAnswer: '<ul>',
        answerChoices: ['<ul>', '<ol>', '<li>', '<list>']
      },
      {
        question: 'Which tag is used to make text bold?',
        correctAnswer: '<b>',
        answerChoices: ['<bold>', '<b>', '<strong>', '<em>']
      },
      {
        question: 'Which tag is used to create a table in HTML?',
        correctAnswer: '<table>',
        answerChoices: ['<table>', '<tab>', '<tr>', '<td>']
      },
      {
        question: 'Which tag is used for a line break?',
        correctAnswer: '<br>',
        answerChoices: ['<break>', '<lb>', '<br>', '<hr>']
      },
      {
        question: 'Which tag is used to define a heading?',
        correctAnswer: '<h1> to <h6>',
        answerChoices: ['<head>', '<header>', '<h1> to <h6>', '<title>']
      },
      {
        question: 'Which attribute specifies the alternative text for an image?',
        correctAnswer: 'alt',
        answerChoices: ['title', 'alt', 'src', 'text']
      }
    ]
  },
  CSS: {
    topic: 'CSS',
    questions: [
      {
        question: 'What does CSS stand for?',
        correctAnswer: 'Cascading Style Sheets',
        answerChoices: [
          'Cascading Style Sheets',
          'Creative Style System',
          'Computer Styled Sections',
          'Colorful Style Sheets'
        ]
      },
      {
        question: 'Which property is used to change text color?',
        correctAnswer: 'color',
        answerChoices: ['color', 'text-color', 'font-color', 'background-color']
      },
      {
        question: 'Which property is used to change the background color?',
        correctAnswer: 'background-color',
        answerChoices: ['background-color', 'bgcolor', 'color', 'background']
      },
      {
        question: 'Which property is used to change font size?',
        correctAnswer: 'font-size',
        answerChoices: ['font-size', 'text-size', 'size', 'font']
      },
      {
        question: 'Which property controls the space inside an element’s border?',
        correctAnswer: 'padding',
        answerChoices: ['margin', 'padding', 'border', 'spacing']
      },
      {
        question: 'Which property controls the space outside an element’s border?',
        correctAnswer: 'margin',
        answerChoices: ['margin', 'padding', 'border', 'spacing']
      },
      {
        question: 'Which property makes text italic?',
        correctAnswer: 'font-style',
        answerChoices: ['font-style', 'font-italic', 'style', 'text-style']
      },
      {
        question: 'Which value of position places an element relative to its first positioned ancestor?',
        correctAnswer: 'absolute',
        answerChoices: ['absolute', 'relative', 'fixed', 'sticky']
      },
      {
        question: 'Which CSS property is used to make text bold?',
        correctAnswer: 'font-weight',
        answerChoices: ['bold', 'font-weight', 'text-bold', 'style']
      },
      {
        question: 'Which unit is relative to the root element’s font size?',
        correctAnswer: 'rem',
        answerChoices: ['px', 'em', 'rem', '%']
      }
    ]
  },
  Javascript: {
    topic: 'JavaScript',
    questions: [
      {
        question: 'What does JS stand for?',
        correctAnswer: 'JavaScript',
        answerChoices: ['JavaSource', 'JavaScript', 'JustScript', 'JScript']
      },
      {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        correctAnswer: 'let',
        answerChoices: ['var', 'let', 'const', 'All of the above']
      },
      {
        question: 'Which symbol is used for single-line comments?',
        correctAnswer: '//',
        answerChoices: ['#', '//', '<!-- -->', '/* */']
      },
      {
        question: 'Which operator is used for strict equality?',
        correctAnswer: '===',
        answerChoices: ['==', '===', '=', '!=']
      },
      {
        question: 'Which method is used to print to the console?',
        correctAnswer: 'console.log()',
        answerChoices: ['console.log()', 'print()', 'echo()', 'log.console()']
      },
      {
        question: 'Which keyword is used to declare a constant?',
        correctAnswer: 'const',
        answerChoices: ['let', 'var', 'const', 'static']
      },
      {
        question: 'Which method converts a string to uppercase?',
        correctAnswer: 'toUpperCase()',
        answerChoices: ['toUpperCase()', 'upperCase()', 'makeUpper()', 'toCaps()']
      },
      {
        question: 'Which function parses a string to an integer?',
        correctAnswer: 'parseInt()',
        answerChoices: ['parseInt()', 'parseFloat()', 'Number()', 'int()']
      },
      {
        question: 'Which loop executes at least once?',
        correctAnswer: 'do...while',
        answerChoices: ['for', 'while', 'do...while', 'loop']
      },
      {
        question: 'Which keyword is used to define a function?',
        correctAnswer: 'function',
        answerChoices: ['func', 'function', 'def', 'method']
      }
    ]
  },
  Accessibility: {
    topic: 'Accessibility',
    questions: [
      {
        question: 'What does WCAG stand for?',
        correctAnswer: 'Web Content Accessibility Guidelines',
        answerChoices: [
          'Web Content Accessibility Guidelines',
          'World Content Access Group',
          'Web Compliance and Accessibility Guide',
          'Website Content Accessibility Guide'
        ]
      },
      {
        question: 'What does ARIA stand for?',
        correctAnswer: 'Accessible Rich Internet Applications',
        answerChoices: [
          'Accessible Rich Internet Applications',
          'Accessible Resource Integration API',
          'Assistive Responsive Internet Access',
          'Accessible Responsive Interface Applications'
        ]
      },
      {
        question: 'Which HTML attribute improves accessibility for images?',
        correctAnswer: 'alt',
        answerChoices: ['alt', 'title', 'desc', 'src']
      },
      {
        question: 'Which role describes a navigation landmark?',
        correctAnswer: 'navigation',
        answerChoices: ['nav', 'navigation', 'landmark', 'menu']
      },
      {
        question: 'Which WCAG principle refers to making content usable with assistive technologies?',
        correctAnswer: 'Robust',
        answerChoices: ['Perceivable', 'Operable', 'Understandable', 'Robust']
      },
      {
        question: 'Which attribute specifies a label for form inputs?',
        correctAnswer: 'label',
        answerChoices: ['for', 'id', 'label', 'name']
      },
      {
        question: 'Which color contrast ratio is recommended for normal text?',
        correctAnswer: '4.5:1',
        answerChoices: ['2:1', '3:1', '4.5:1', '7:1']
      },
      {
        question: 'Which ARIA attribute marks the currently active element?',
        correctAnswer: 'aria-current',
        answerChoices: ['aria-current', 'aria-active', 'aria-selected', 'aria-focus']
      },
      {
        question: 'Which input type is best for picking dates?',
        correctAnswer: 'date',
        answerChoices: ['text', 'date', 'datetime', 'calendar']
      },
      {
        question: 'Which guideline principle ensures text alternatives for non-text content?',
        correctAnswer: 'Perceivable',
        answerChoices: ['Operable', 'Understandable', 'Perceivable', 'Robust']
      }
    ]
  }
};
