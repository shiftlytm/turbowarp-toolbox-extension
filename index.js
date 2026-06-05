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
          text: 'закодировать текст [ONE] в Base64',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'decode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'раскодировать текст [ONE] из Base64',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'print',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Распечатать в консоль [ONE]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
      ]
    };
  }

  join(args) {
    try {
      const theResult = args.ONE + args.TWO;
      return theResult;
    } catch (e) {
      return 'Не удалось объединить текст';
    }
  }

  encode(args) {
    try {
      const theResult = btoa(encodeURIComponent(args.ONE));
      return theResult;
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  decode(args) {
    try {
      const theResult = atob(decodeURIComponent(args.ONE));
      return theResult;
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  print(args) {
    try {
      console.log(args.ONE)
    } catch (e) {
      alert('Не удалось напечатать ' + args.ONE + ' в консоль')
    }
  }
}

Scratch.extensions.register(new ToolBox());
