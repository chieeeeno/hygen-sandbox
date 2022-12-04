module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message:
          'どのディレクトリに作成しますか？（pages配下のディレクトリを指定してください）'
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'ファイル名は何ですか？'
      },
      {
        type: 'toggle',
        name: 'confirm',
        message(answer) {
          return `このディレクトリにコンポーネントを作成しますか？（/pages/${answer.answers.dir}/${answer.answers.fileName}.vue}）`
        },
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      }
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { dir } = answers
      const absPath = `src/pages/${dir}`
      return { ...answers, absPath }
    })
  }
}
