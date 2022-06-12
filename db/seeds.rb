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
        color: "#303AD0",
        notes: "Notes For Test Project",
        user_id: 1
    )

# -------------------------------------------------------------------------

    Task.create!(
        title: "Test Task Example 1",
        description: "Test Task Example 1 Description!",
        color: "#FB0202",
        notes: "Notes For Test Task!",
        status: "Assigned",
        priority: "None",
        due_date: "2020-06-01",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 2",
        description: "Test Task Example 2 Description!",
        color: "#FB7D02",
        notes: "Notes For Test Task!",
        status: "In Progress",
        priority: "Low",
        due_date: "2020-07-01",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 3",
        description: "Test Task Example 3 Description!",
        color: "#FBF702",
        notes: "Notes For Test Task!",
        status: "Ready For Review",
        priority: "Medium",
        due_date: "2020-08-01",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 4",
        description: "Test Task Example 4 Description!",
        color: "#28FB02",
        notes: "Notes For Test Task!",
        status: "Edit Requested",
        priority: "High",
        due_date: "2020-09-01",
        project_id: 1
    )

    Task.create!(
        title: "Test Task Example 5",
        description: "Test Task Example 5 Description!",
        color: "#0228FB",
        notes: "Notes For Test Task!",
        status: "Complete",
        priority: "Urgent",
        due_date: "2020-10-01",
        project_id: 1
    )

# -------------------------------------------------------------------------
# SET #1

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    color: "#FB0202",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    due_date: "2020-06-01",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    color: "#FB7D02",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    due_date: "2020-07-01",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    color: "#FBF702",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    due_date: "2020-08-01",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    color: "#28FB02",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    due_date: "2020-09-01",
    task_id: 1
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    color: "#0228FB",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    due_date: "2020-10-01",
    task_id: 1
)

# -------------------------------------------------------------------------
# SET #2

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    color: "#FB0202",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    due_date: "2020-06-01",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    color: "#FB7D02",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    due_date: "2020-07-01",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    color: "#FBF702",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    due_date: "2020-08-01",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    color: "#28FB02",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    due_date: "2020-09-01",
    task_id: 2
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    color: "#0228FB",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    due_date: "2020-10-01",
    task_id: 2
)

# -------------------------------------------------------------------------
# SET #3

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    color: "#FB0202",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    due_date: "2020-06-01",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    color: "#FB7D02",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    due_date: "2020-07-01",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    color: "#FBF702",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    due_date: "2020-08-01",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    color: "#28FB02",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    due_date: "2020-09-01",
    task_id: 3
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    color: "#0228FB",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    due_date: "2020-10-01",
    task_id: 3
)

# -------------------------------------------------------------------------
# SET #4

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    color: "#FB0202",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    due_date: "2020-06-01",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    color: "#FB7D02",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    due_date: "2020-07-01",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    color: "#FBF702",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    due_date: "2020-08-01",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    color: "#28FB02",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    due_date: "2020-09-01",
    task_id: 4
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    color: "#0228FB",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    due_date: "2020-10-01",
    task_id: 4
)

# -------------------------------------------------------------------------
# SET #5

Subtask.create!(
    title: "Test Subtask Example 1",
    description: "Test Subtask Example 1 Description!",
    color: "#FB0202",
    notes: "Notes For Test Subtask!",
    status: "Assigned",
    priority: "None",
    due_date: "2020-06-01",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 2",
    description: "Test Subtask Example 2 Description!",
    color: "#FB7D02",
    notes: "Notes For Test Subtask!",
    status: "In Process",
    priority: "Low",
    due_date: "2020-07-01",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 3",
    description: "Test Subtask Example 3 Description!",
    color: "#FBF702",
    notes: "Notes For Test Subtask!",
    status: "Ready For Review",
    priority: "Medium",
    due_date: "2020-08-01",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 4",
    description: "Test Subtask Example 4 Description!",
    color: "#28FB02",
    notes: "Notes For Test Subtask!",
    status: "Edit Requested",
    priority: "High",
    due_date: "2020-09-01",
    task_id: 5
)

Subtask.create!(
    title: "Test Subtask Example 5",
    description: "Test Subtask Example 5 Description!",
    color: "#0228FB",
    notes: "Notes For Test Subtask!",
    status: "Complete",
    priority: "Urgent",
    due_date: "2020-10-01",
    task_id: 5
)

puts "Seeds Succesfully Sewn!"