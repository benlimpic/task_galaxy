puts "Sewing Seeds in Soil!"

    User.create!(
        name: "Ben Gerald",
        email: "benlimpic@gmail.com",
        username: "username",
        password_digest: BCrypt::Password.create('password')
    )

    User.create!(
        name: "Daisy Mae",
        email: "daisymaelimpic@gmail.com",
        username: "username5",
        password_digest: BCrypt::Password.create('password')
    )

# -------------------------------------------------------------------------

    Project.create!(
        title: "Test Project 1",
        description: "Test Project Description",
        notes: "Notes For Test Project",
        status: "Assigned",
        priority: "None",
        user_id: 1
    )

    Project.create!(
        title: "Test Project 2",
        description: "Test Project Description",
        notes: "Notes For Test Project",
        status: "Assigned",
        priority: "None",
        user_id: 1
    )

    Project.create!(
        title: "Test Project 1",
        description: "Test Project Description",
        notes: "Notes For Test Project",
        status: "Assigned",
        priority: "None",
        user_id: 2
    )

    Project.create!(
        title: "Test Project 2",
        description: "Test Project Description",
        notes: "Notes For Test Project",
        status: "Assigned",
        priority: "None",
        user_id: 2
    )

# -------------------------------------------------------------------------

    Task.create!(
        title: "Test Task Example 1",
        description: "Test Task Example 1 Description!",
        notes: "Notes For Test Task!",
        status: "Assigned",
        priority: "None",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 2",
        description: "Test Task Example 2 Description!",
        notes: "Notes For Test Task!",
        status: "In Progress",
        priority: "Low",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 1",
        description: "Test Task Example 1 Description!",
        notes: "Notes For Test Task!",
        status: "Assigned",
        priority: "None",
        project_id: 2
    )

    Task.create!(
        title: "Test Task Example 2",
        description: "Test Task Example 2 Description!",
        notes: "Notes For Test Task!",
        status: "In Progress",
        priority: "Low",
        project_id: 2
    )

    Task.create!(
        title: "Test Task Example 1",
        description: "Test Task Example 1 Description!",
        notes: "Notes For Test Task!",
        status: "Assigned",
        priority: "None",
        project_id: 3
    )

    Task.create!(
        title: "Test Task Example 2",
        description: "Test Task Example 2 Description!",
        notes: "Notes For Test Task!",
        status: "In Progress",
        priority: "Low",
        project_id: 3
    )

    Task.create!(
        title: "Test Task Example 1",
        description: "Test Task Example 1 Description!",
        notes: "Notes For Test Task!",
        status: "Assigned",
        priority: "None",
        project_id: 4
    )

    Task.create!(
        title: "Test Task Example 2",
        description: "Test Task Example 2 Description!",
        notes: "Notes For Test Task!",
        status: "In Progress",
        priority: "Low",
        project_id: 4
    )

 
# -------------------------------------------------------------------------

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    task_id: 6
)

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 7
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    task_id: 8
)



puts "Seeds Succesfully Sewn!"
