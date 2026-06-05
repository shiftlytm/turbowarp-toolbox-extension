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
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        
        {
          opcode: 'encode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'закодировать текст [ONE] по Base64',
          
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        }
      ]
    };
  }

  join(args) {
    return args.ONE + args.TWO;
  }

  encode(args) {
    return btoa(args.ONE);
  }
}

Scratch.extensions.register(new ToolBox());
