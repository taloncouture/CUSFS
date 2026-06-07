import styles from './About.module.css'

const OFFICERS = [
  { role: 'President',      name: 'Talon Couture',    bonus: 'God Emperor' },
  { role: 'Vice President', name: 'Ben Gudzy',         bonus: 'Grand Vizier' },
  { role: 'Treasurer',      name: 'Katie Heim Binas',  bonus: 'High Inquisitor' },
  { role: 'Secretary',      name: 'Alex Bratton',      bonus: 'Alien Liaison' },
]

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <span className={styles.rule} />
          <h2 className={styles.sectionTitle}>// ABOUT //</h2>
          <span className={styles.rule} />
        </header>
        <div className={styles.panel}>
          <p>
            The Columbia University Science Fiction Society (CUSFS) is a student
            organization dedicated to bringing together people who love to discuss science fiction and fantasy. 
            We meet weekly to discuss watch movies,
            run tabletop RPGs (TTRPGs), read short stories, and geek out about all things sci-fi and fantasy.
          </p>
          <p>
            Whether you're a lifelong fan or just getting into it, all are
            welcome aboard.
          </p>
          <p>
            Fun Fact: CUSFS is one of the oldest clubs at Columbia. However, throughout its lifespan it
            has gone in and out of existence. The version that you see here is the renewed CUSFS and was started a few years ago.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <span className={styles.rule} />
          <h2 className={styles.sectionTitle}>// OFFICERS //</h2>
          <span className={styles.rule} />
        </header>
        <div className={styles.officerGrid}>
          {OFFICERS.map(({ role, name, bonus }) => (
            <div key={role} className={styles.officerCard}>
              <p className={styles.officerRole}>{role}</p>
              <p className={styles.officerName}>{name}</p>
              <p className={styles.officerBonus}>{bonus}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
