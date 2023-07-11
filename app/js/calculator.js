
const output      = document.querySelector('#output');

var result    = 0;
var last_op   = '';
var dot       = false;
var new_entry = true;

function clear_all ()
{
  result = 0;
  last_op = '';
  cancel_entry();
}

function cancel_entry ()
{
  output.value = '0';
  new_entry = true;
  dot = false;
}

function operation (x, op, y)
{
  switch (op)
  {
    case '+': return x+y;
    case '-': return x-y;
    case '*': return x*y;
    case '/':
      if (y) return x/y;
      clear_all();
      output.value = "Error: Can't divide with 0";
      exit();
  }
}

function calculate (operator)
{
  if (last_op != '' && !new_entry)
  {
    console.log(last_op);
    result = operation(result, last_op, parseFloat(output.value));
    output.value = result;
  }
  else result = parseFloat(output.value);
  if (operator == '=') last_op = '';
  else last_op = operator;
  new_entry = true;
  dot = false;
}

function change_sign ()
{
  if (new_entry) 
  {
    output.value = '-';
    new_entry = false;
  }
  else if (output.value == '-') output.value = '0';
  else if (output.value == '0') output.value = '-';
  else output.value = parseFloat(output.value)*(-1);
}

function write_expression (value)
{
  if (new_entry)
  {
    output.value = value;
    new_entry = false;
  }
  else
  {
    if (dot && value == 0) output.value += value;
    else output.value = parseFloat(output.value + value);
  }
}

function add_dot ()
{
  if (!dot)
  {
    if (new_entry) output.value = '0.';
    else if (output.value == '-') output.value += '0.';
    else output.value += '.';
    dot = true;
    new_entry = false;
  }
}
