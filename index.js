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
      return args.ONE + args.TWO;
    } catch (e) {
      return 'Не удалось объединить текст';
    }
  }

  encode(args) {
    try {
      return btoa(encodeURIComponent(args.ONE));
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  decode(args) {
    try {
      return atob(decodeURIComponent(args.ONE));
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  print(args) {
    try {
      console.log(args.ONE);
    } catch (e) {
      alert('Не удалось напечатать ' + args.ONE + ' в консоль');
    }
  }

  jsonKeysvalue(args) {
    try 
      const theResult = this._fixInvalidJSONValues(this.json_valid_return(key)) in JSON.parse(json)
  }
}

Scratch.extensions.register(new ToolBox());
