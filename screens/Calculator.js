import React, {Component} from 'react';

import {

  StyleSheet,

  View,

  Text,

  TextInput,

  TouchableOpacity,

  Image,

} from 'react-native';

 

var num1 = '0';

var num2 = '0';

var cal = '';

 

class App extends Component {

  state = {

    res: '0',

  };

 

  clickNum = (e) => {

    if (e === 'Re') {

      this.setState({

        res: '0',

      });

      num1 = '0';

      num2 = '0';

      cal = '';

    } else if (e === '+/-') {

      if (cal === '') {

        num1 = num1 - num1 * 2;

        this.setState({

          res: num1,

        });

      } else {

        num2 = num2 - num2 * 2;

        this.setState({

          res: num2,

        });

      }

    } else if (e === '/2') {

      if (cal === '') {

        num1 = num1 / 2 + "";

        this.setState({

          res: num1,

        });

      } else {

        num2 = num2 / 2 + "";

        this.setState({

          res: num2,

        });

      }

    } else if (e === '/') {

      if (cal === '') {

        cal = e;

      } else {

        if (cal === '+') {

          num1 = Number(num1) + Number(num2);

        } else if (cal === '-') {

          num1 = Number(num1) - Number(num2);

        } else if (cal === '*') {

          num1 = Number(num1) * Number(num2);

        } else if (cal === '/') {

          num1 = Number(num1) / Number(num2);

        }

        cal = e;

        num2 = '0';

        this.setState({

          res: num1,

        });

      }

    } else if (e === '+') {

      if (cal === '') {

        cal = e;

      } else {

        if (cal === '+') {

          num1 = Number(num1) + Number(num2);

        } else if (cal === '-') {

          num1 = Number(num1) - Number(num2);

        } else if (cal === '*') {

          num1 = Number(num1) * Number(num2);

        } else if (cal === '/') {

          num1 = Number(num1) / Number(num2);

        }

        cal = e;

        num2 = '0';

        this.setState({

          res: num1,

        });

      }

    } else if (e === '-') {

      if (cal === '') {

        cal = e;

      } else {

        if (cal === '+') {

          num1 = Number(num1) + Number(num2);

        } else if (cal === '-') {

          num1 = Number(num1) - Number(num2);

        } else if (cal === '*') {

          num1 = Number(num1) * Number(num2);

        } else if (cal === '/') {

          num1 = Number(num1) / Number(num2);

        }

        cal = e;

        num2 = '0';

        this.setState({

          res: num1,

        });

      }

    } else if (e === '*') {

      if (cal === '') {

        cal = e;

      } else {

        if (cal === '+') {

          num1 = Number(num1) + Number(num2);

        } else if (cal === '-') {

          num1 = Number(num1) - Number(num2);

        } else if (cal === '*') {

          num1 = Number(num1) * Number(num2);

        } else if (cal === '/') {

          num1 = Number(num1) / Number(num2);

        }

        cal = e;

        num2 = '0';

        this.setState({

          res: num1,

        });

      }

    } else if (e === '=') {

      if (cal === '') {

      } else {

        if (cal === '+') { 

          num1 = Number(num1) + Number(num2) + "";

        } else if (cal === '-') {

          num1 = Number(num1) - Number(num2) + "";

        } else if (cal === '*') {

          num1 = Number(num1) * Number(num2) + "";

        } else if (cal === '/') {

          num1 = Number(num1) / Number(num2) + "";

        }

        cal = '';

        num2 = '0';

        this.setState({

          res: num1,

        });

      }

    } else if (e === '.') {

      if (cal === '') {

        if (num1.indexOf(e) === -1) {

          num1 = num1 + e;

          this.setState({

            res: num1,

          });

        }

      } else {

        if (num2.indexOf(e) === -1) {

          num2 = num2 + e;

          this.setState({

            res: num1,

          });

        }

      }

    } else if (e === 'Del') {

      // Del

      if (cal === '') {

        if (num1.length === 1) {

          num1 = '0';

          this.setState({

            res: num1,

          });

        } else {

          num1 = num1.slice(0, num1.length - 1);

          this.setState({

            res: num1,

          });

        }

      } else {

        if (num1.length === 1) {

          num2 = '0';

          this.setState({

            res: num2,

          });

        } else {

          num2 = num2.slice(0, num2.length - 1);

          this.setState({

            res: num2,

          });

        }

      }

    } else {

      // 숫자인 경우

      if (cal === '') {

        if (num1 === '0') {

          num1 = e;

          this.setState({

            res: num1,

          }); 

        } else {

          num1 = num1.concat(e);

          this.setState({

            res: num1,

          });

        }

      } else {

        if (num2 === '0') {

          num2 = e;

          this.setState({

            res: num2,

          });

        } else {

          num2 = num2.concat(e);

          this.setState({

            res: num2,

          });

        }

      }

    }

  };

 

  render() {

    return (

      <View style={styles.allBody}>

        <Text style={styles.top}>{this.state.res}</Text>

        <View style={styles.body}>

          <View style={styles.inBody}>

            <TouchableOpacity

              onPress={() => this.clickNum('Re')}

              style={styles.numTouch}>

              <Text style={styles.numSmall}>Re</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('+/-')}

              style={styles.numTouch}>

              <Text style={styles.numSmall}>+/-</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('/2')}

              style={styles.numTouch}>

              <Text style={styles.numSmall}>/2</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('/')}

              style={styles.numTouch}>

              <Text style={styles.num}>/</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.inBody}>

            <TouchableOpacity

              onPress={() => this.clickNum('1')}

              style={styles.numTouch}>

              <Text style={styles.num}>1</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('2')}

              style={styles.numTouch}>

              <Text style={styles.num}>2</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('3')}

              style={styles.numTouch}>

              <Text style={styles.num}>3</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('+')}

              style={styles.numTouch}>

              <Text style={styles.num}>+</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.inBody}>

            <TouchableOpacity

              onPress={() => this.clickNum('4')}

              style={styles.numTouch}>

              <Text style={styles.num}>4</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('5')}

              style={styles.numTouch}>

              <Text style={styles.num}>5</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('6')}

              style={styles.numTouch}>

              <Text style={styles.num}>6</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('-')}

              style={styles.numTouch}>

              <Text style={styles.num}>-</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.inBody}>

            <TouchableOpacity

              onPress={() => this.clickNum('7')}

              style={styles.numTouch}>

              <Text style={styles.num}>7</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('8')}

              style={styles.numTouch}>

              <Text style={styles.num}>8</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('9')}

              style={styles.numTouch}>

              <Text style={styles.num}>9</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('*')}

              style={styles.numTouch}>

              <Text style={styles.num}>*</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.inBody}>

            <TouchableOpacity

              onPress={() => this.clickNum('Del')}

              style={styles.numTouch}>

              <Text style={styles.numSmall}>Del</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('0')}

              style={styles.numTouch}>

              <Text style={styles.num}>0</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('.')}

              style={styles.numTouch}>

              <Text style={styles.num}>.</Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() => this.clickNum('=')}

              style={styles.numTouch}>

              <Text style={styles.num}>=</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.mini}><Text style={styles.numMini}>{num1} {cal} {num2}</Text></View>

      </View>

    );

  }

}

 

const styles = StyleSheet.create({

  allBody: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'stretch',

    padding: 15,

  },

  body: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'stretch',

  },

  mini: {

    flex: 0.3,

    justifyContent: 'center',

    alignItems: 'stretch',

    backgroundColor: 'lightgray',

    

  },

  inBody: {

    flexDirection: 'row',

  },

  top: {

    flex: 1,

    backgroundColor: 'lightgray',

    textAlign: 'right',

    textAlignVertical: 'center',

    fontSize: 30,

    paddingRight: 20,

  },

  num: {

    textAlign: 'center',

    textAlignVertical: 'center',

    fontSize: 30,

  },

  numTouch: {

    flex: 1,

  },

  numSmall: {

    flex: 1,

    textAlign: 'center',

    textAlignVertical: 'center',

    fontSize: 20,

    paddingTop: 5,

  },

  numMini: {

    textAlign: 'center',

    textAlignVertical: 'center',

    fontSize: 15,

  },

});

 

export default App;