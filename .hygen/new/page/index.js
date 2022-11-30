module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'page_name',
        message: 'What is the name of page?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory?',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { dir } = answers
        const abs_path = `src/pages/${dir}`
        return { ...answers, abs_path }
      })
  }
}