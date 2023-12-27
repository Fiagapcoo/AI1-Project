/**********************************************************************************
 * @brief  Function to handle the submission of a form.                           *
 *                                                                                *
 * @details This function prevents the default form submission, checks if all     *
 *          required fields are filled, displays an alert if any field is empty,  *
 *          and then saves the form state to local storage, maintaining a history *
 *          of form submissions.                                                  *
 *                                                                                *
 * @param  {object} event - The event object representing the form submission.    *
 **********************************************************************************/

class Component extends React.Component {
  constructor(props) {
    // Log local storage data
    console.log(JSON.parse(localStorage.getItem('formSubmissions')));

    super(props);

    // Initial state of the component
    this.state = {
      Name: '',
      Reason: '',
      Email: '',
      Phone: '',
      Message: ''
    };

    // Bind the handleChange and handleSubmit methods to the component instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

/**********************************************************************************
 * @brief  Function to handle changes in form input fields.                       *
 *                                                                                *
 * @details This function extracts the name and value from the event target,      *
 *          and updates the corresponding state property using setState.          *
 *                                                                                *
 * @param  {object} event - The event object representing the input field change. *
 **********************************************************************************/

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**********************************************************************************
   * @brief  Function to handle the submission of a form.                           *
   *                                                                                *
   * @details This function prevents the default form submission, checks if all     *
   *          required fields are filled, displays an alert if any field is empty,  *
   *          and then saves the form state to local storage.                       *
   *                                                                                *
   * @param  {object} event - The event object representing the form submission.    *
   **********************************************************************************/
  handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if any required field is empty
    if (
      this.state.Name === '' ||
      this.state.Reason === '' ||
      this.state.Email === '' ||
      this.state.Phone === '' ||
      this.state.Message === ''
    ) {
      // Display an alert if any field is empty
      alert('Por favor preencha todos os campos!');
      return;
    }

// Verify if email is valid
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(this.state.Email)) {
  alert('Por favor insira um email válido!');
  return;
}

// Verify if phone is valid
const phoneRegex = /^\+\d{1,3} \d+$/;
if (!phoneRegex.test(this.state.Phone)) {
  alert('Por favor insira um número de telefone válido!');
  return;
}



    // Retrieve existing form submissions from local storage
    const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    // Add the current form state to the list of submissions
    formSubmissions.push(this.state);

    // Save the updated list to local storage
    localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions));

    // Clear the form fields after submission
    this.setState({
      Name: '',
      Reason: '',
      Email: '',
      Phone: '',
      Message: ''
    });

    // Reload the page after submit (remove this line if you don't want to reload)
    window.location.reload();
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, 'Contacte-nos'),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('fieldset', null,
          React.createElement('label', null, 'Nome:'),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Nome',
            className: 'input',
            name: 'Name',
            value: this.state.Name,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement('label', null, 'Motivo de Contacto:'),
          React.createElement(
            'select',
            {
              className: 'select',
              name: 'Reason',
              value: this.state.Reason,
              onChange: this.handleChange
            },
            React.createElement('option', { value: '' }, 'Selecione uma opção'),
            React.createElement('option', { value: 'Sugestao' }, 'Sugestão'),
            React.createElement('option', { value: 'critica' }, 'Crítica'),
            React.createElement('option', { value: 'relamacao' }, 'Reclamação'),
            React.createElement('option', { value: 'informacao' }, 'Informação'),
            React.createElement('option', { value: 'outro' }, 'Outro')
          ),
          React.createElement('br', null),
          React.createElement('label', null, 'Email:'),
          React.createElement('input', {
            type: 'email',
            placeholder: 'example@example.com',
            className: 'input',
            name: 'Email',
            value: this.state.Email,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement('label', null, 'Telefone:'),
          React.createElement('input', {
            type: 'text',
            placeholder: '+351 123456789',
            className: 'input',
            name: 'Phone',
            value: this.state.Phone,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement('label', null, 'Mensagem:'),
          React.createElement('textarea', {
            className: 'textarea',
            placeholder: 'Mensagem',
            name: 'Message',
            value: this.state.Message,
            onChange: this.handleChange
          }),
          React.createElement('br', null),
          React.createElement('input', { type: 'submit', value: 'Enviar', className: 'button' })
        )
      )
    );
  }
}

// Render the component to the DOM into the div with the ID react-content
ReactDOM.render(React.createElement(Component), document.getElementById('react-content'));


window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = '';
});