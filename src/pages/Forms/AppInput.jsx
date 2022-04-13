

const AppInput = ({form, handleChange}) => {
  return ( 
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
            </td>
            <td>
              <input
                value={form.name ? form.name : ''}
                onChange={handleChange}
                id="name"
                required name="name" type="text" placeholder="Name" autoComplete="off"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="description">Description</label>
            </td>
            <td>
              <input
                value={form.description ? form.description : ''} 
                onChange={handleChange} 
                id="description"
                required name="description" 
                type="text" 
                placeholder="Description" 
                autoComplete="off"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
    );
}

export default AppInput;