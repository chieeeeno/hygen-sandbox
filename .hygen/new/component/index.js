module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'component_type',
        message: 'コンポーネントのタイプを選択してください',
        choices: ['atoms', 'molecules', 'organisms']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'コンポーネントの名前を入力してください(最初は大文字にする)',
        validate: str => /^[A-Z]/.test(str)
      },
      {
        type: 'toggle',
        name: 'is_typescript',
        message: 'TypeScriptで作成しますか？',
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      },
      {
        type: 'toggle',
        name: 'is_create_stories',
        message: 'Storybookファイルを作成しますか？',
        enabled: 'Yes',
        disabled: 'No',
        initial: 'Yes'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
      // {
      //   type: 'confirm',
      //   name: 'have_style',
      //   message: 'Is it have style?',
      // },
      // {
      //   type: 'confirm',
      //   name: 'have_props',
      //   message: 'Is it have props?',
      // },
      // {
      //   type: 'confirm',
      //   name: 'have_hooks',
      //   message: 'Is it have hooks?',
      // },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { component_type, component_name,is_typescript, dir, have_props } = answers
        const path = `${component_type}/${ dir ? `${dir}/` : `` }${component_name}`
        const abs_path = `src/components/${path}`
        const ext = is_typescript ? 'ts' : 'js'
        // const type_annotate = have_props ? "React.FC<Props>" : 'React.FC'
        // const props = have_props ? '(props)' : '()'
        // const tag = args.tag ? args.tag : 'div'
        return { ...answers, path, abs_path, ext }
      })
  }
}