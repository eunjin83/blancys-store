export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "BLANCYS NOTICE",
      date: "2026.08.10",
    },
  ];

  return (
    <main className="noticePage">
      <section className="noticeHeader">
        <p>BLANCYS CUSTOMER CARE</p>
        <h1>Notice</h1>
      </section>

      <section className="noticeContainer">
        <div className="noticeTableHeader">
          <span>NO.</span>
          <span>SUBJECT</span>
          <span>DATE</span>
        </div>

        {notices.map((notice) => (
          <div className="noticeRow" key={notice.id}>
            <span>{notice.id}</span>
            <span>{notice.title}</span>
            <span>{notice.date}</span>
          </div>
        ))}
      </section>
    </main>
  );
}