import React from "react"

const Form = React.forwardRef(function Form({}, ref) {
    React.useImperativeHandle(ref, () => {
        return {
            clear() {
                ref.current.reset()
            }
        }
    })

    return (
        <form ref={ref}>
            <p>
                <label>Name</label>
                <input type="text" />
            </p>

            <p>
                <label>Email</label>
                <input type="email" />
            </p>
            <p id="actions">
                <button>Save</button>
            </p>
        </form>
    )
})

export default Form
