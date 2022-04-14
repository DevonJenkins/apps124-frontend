

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
          <tr>
            <td>
              <label htmlFor="appType">App type</label>
            </td>
            <td>
              <select name="appType"
                      id="appType"
                      onChange={handleChange}
                      type="text"
              >
                <option value="Game">Game</option>
                <option value="MEN-stack">MEN-stack</option>
                <option value="MERN-stack">MERN-stack</option>
                <option value="Flask">Flask </option>

              </select>
              {/* <input
                value={form.description ? form.description : ''} 
                onChange={handleChange} 
                id="description"
                required name="description" 
                type="text" 
                placeholder="Description" 
                autoComplete="off"
              /> */}
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="photo">App Thumbnail</label>
            </td>
            <td>
              <input
                value={form.photo ? form.photo : ''} 
                onChange={handleChange} 
                id="photo"
                required name="photo" 
                type="text" 
                placeholder="Paste image address" 
                autoComplete="off"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="link">Link</label>
            </td>
            <td>
              <input
                value={form.link ? form.link : ''} 
                onChange={handleChange} 
                id="link"
                required name="link" 
                type="text" 
                placeholder="App link goes here" 
                autoComplete="off"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="author">Author(s)</label>
            </td>
            <td>
              <input
                value={form.author ? form.author : ''} 
                onChange={handleChange} 
                id="author"
                required name="author" 
                type="text" 
                placeholder="author(s)" 
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