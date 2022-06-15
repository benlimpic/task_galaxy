puts "Sewing Seeds in Soil!"

    User.create!(
        name: "Ben Gerald",
        email: "benlimpic@gmail.com",
        username: "username",
        password_digest: BCrypt::Password.create('password')
    )

# -------------------------------------------------------------------------

    Project.create!(
        title: "Test Project",
        description: "Test Project Description",
        notes: "Notes For Test Project",
        user_id: 1
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
        title: "Test Task Example 3",
        description: "Test Task Example 3 Description!",
        notes: "Notes For Test Task!",
        status: "Ready For Review",
        priority: "Medium",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 4",
        description: "Test Task Example 4 Description!",
        notes: "Notes For Test Task!",
        status: "Edit Requested",
        priority: "High",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 5",
        description: "Test Task Example 5 Description!",
        notes: "Notes For Test Task!",
        status: "Complete",
        priority: "Urgent",
        project_id: 1
    )

# -------------------------------------------------------------------------
# SET #1

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
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    task_id: 1
)

# -------------------------------------------------------------------------
# SET #2

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 2
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
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    task_id: 2
)

# -------------------------------------------------------------------------
# SET #3

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
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    task_id: 3
)

# -------------------------------------------------------------------------
# SET #4

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    task_id: 4
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
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    task_id: 4
)

# -------------------------------------------------------------------------
# SET #5

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
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    task_id: 5
)

puts "Seeds Succesfully Sewn!"