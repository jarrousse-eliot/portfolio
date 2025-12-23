import type { FunctionComponent } from "react";

const Contact: FunctionComponent  = () => {
  return (
    <section className="page">
      <h2>Contact</h2>
      <p>Email: your.email@email.com</p>
      <p>
        GitHub: <a href="https://github.com/username" target="_blank">username</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/username" target="_blank">Profile</a>
      </p>
    </section>
  )
}

export default Contact

