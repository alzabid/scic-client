const WhyOurWeb = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" my-20 grid  max-w-7xl justify-center">
        <div className="mx-8">
          <header className="mx-auto mb-20 max-w-xl text-center tracking-wide md:mb-16">
            <h2 className="mb-4  text-2xl font-semibold text-neutral-darkBlue md:text-3xl">
              Who Benefits from <span className="text-amber-500" >TaskMaster Pro</span>?
            </h2>
          </header>
          <main>
            <section
              id="card_section"
              className="grid items-center gap-6 md:grid-flow-col md:grid-cols-3 md:gap-8 "
            >
              <div className="md:row-span-2">
                {/* card-1 */}
                <div className="flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-cyan  p-7 shadow-2xl">
                  <div className="mb-8">
                    <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
                      Developers 🚀
                    </h3>
                    <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                      Stay organized with project milestones, manage coding
                      tasks efficiently, and collaborate seamlessly with your
                      development team. TaskMaster Pro empowers developers to
                      streamline their workflow and deliver exceptional results.
                    </p>
                  </div>
                </div>
              </div>
              {/* card-2 */}
              <div className="flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-red   p-7 shadow-xl">
                <div className="mb-8">
                  <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
                    Corporate Professionals 👔
                  </h3>
                  <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                    Corporate executives, managers, and professionals can
                    enhance their project management capabilities. Keep track of
                    tasks, set priorities, and ensure your team is always on the
                    same page. TaskMaster Pro simplifies corporate task
                    management for optimal productivity.
                  </p>
                </div>
              </div>
              {/* card-3 */}
              <div className="flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-orange  p-7 shadow-xl">
                <div className="mb-8">
                  <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
                    Bankers 💼
                  </h3>
                  <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                    Banking professionals dealing with multiple financial tasks
                    and deadlines can rely on TaskMaster Pro. Organize financial
                    projects, set reminders for critical deadlines, and boost
                    your efficiency in the fast-paced world of banking.
                  </p>
                </div>
              </div>
              <div className="md:row-span-2">
                {/* card-4 */}
                <div className="flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-blue p-7 shadow-xl">
                  <div className="mb-8">
                    <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
                      Students 📚
                    </h3>
                    <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50">
                      Students can use TaskMaster Pro to manage their academic
                      workload effectively. Stay on top of assignments,
                      projects, and deadlines, ensuring a balanced and organized
                      approach to academic success.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default WhyOurWeb;
