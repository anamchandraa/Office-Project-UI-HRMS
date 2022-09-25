import EventCalendar from '../components/EventCalendar'

const MyCalendar = () => {
  return (
    <div>
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>September 2022</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="dashboard">Home</a>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item active">My Calendar</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <EventCalendar/>
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};
export default MyCalendar;
