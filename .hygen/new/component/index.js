module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'componentType',
        message: 'コンポーネントのタイプを選択してください',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'input',
        name: 'componentName',
        message:
          'コンポーネントの名前を入力してください(最初は大文字にしてください)',
        validate: (str) => /^[A-Z]/.test(str)
      },
      {
        type: 'toggle',
        name: 'isTypescript',
        message: 'TypeScriptで作成しますか？',
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      },
      {
        type: 'toggle',
        name: 'isCreateStorybook',
        message: 'Storybookファイルを作成しますか？',
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      },
      {
        type: 'input',
        name: 'dir',
        message(answer) {
          return `どのディレクトリに作成しますか？（/src/components/${answer.answers.componentType}} 以降のパスを指定してください）`
        }
      },
      {
        type: 'toggle',
        name: 'confirm',
        message(answer) {
          return `このディレクトリにコンポーネントを作成しますか？（/src/components/${
            answer.answers.componentType
          }/${answer.answers.dir ? `${answer.answers.dir}/` : ''}${
            answer.answers.componentName
          }）`
        },
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      }
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { componentType, componentName, isTypescript, dir } = answers
      const path = `${componentType}/${dir ? `${dir}/` : ``}${componentName}`
      const absPath = `src/components/${path}`
      const ext = isTypescript ? 'ts' : 'js'
      return { ...answers, path, absPath, ext }
    })
  }
}
