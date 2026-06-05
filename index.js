class ToolBox {
  getInfo() {
    return {
      id: 'toolboxtm',
      name: 'Расширенные возможности',
      blocks: [
        {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: 'объединить текст [ONE] и [TWO]'
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING
            }
          }
        }
      ]
    };
  }

  join (args) {
    return args.ONE + args.TWO;
  }
}

Scratch.extensions.register(new HelloWorld());
