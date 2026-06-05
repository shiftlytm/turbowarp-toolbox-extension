class ToolBox {
  getInfo() {
    return {
      id: 'toolboxtm',
      name: 'Расширенные возможности',

      blocks: [
        {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: 'объединить текст [ONE] и [TWO]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'текст 1'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'текст 2'
            }
          }
        },
        {
          opcode: 'encode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'закодировать текст [ONE] в Base64',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello World'
            }
          }
        }
      ]
    };
  }

  join(args) {
    const theResult = args.ONE + args.TWO;
    return theResult;
  }

  encode(args) {
    const theResult = btoa(encodeURIComponent(args.ONE));
    return theResult;
  }
}

Scratch.extensions.register(new ToolBox());
