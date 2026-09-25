let users = [
    {
        id: 5010,
        first: "John",
        last: "Doe",
        email: "JohnDoe@mail.com",
        group: "Admin",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Active",
        submitted: "05/01/2025",
        enabled: "05/01/2025"
    },
    {
        id: 7681,
        first: "Mia",
        last: "Perry",
        email: "MiaperryX@mail.com",
        group: "Licensed",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Active",
        submitted: "06/02/2026",
        enabled: "06/03/2026"
    },
    {
        id: 6123,
        first: "Ana",
        last: "Lambert",
        email: "AnaLambert98@mail.com",
        group: "Licensed",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Pending",
        submitted: "03/19/2025",
        enabled: "03/19/2025"
    },
    {
        id: 5415,
        first: "Tia",
        last: "Flan",
        email: "TiaF98@mail.com",
        group: "Forward",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Active",
        submitted: "08/15/2025",
        enabled: "08/15/2025"
    },
    {
        id: 6612,
        first: "Kim",
        last: "Jeon",
        email: "Kim.J0209@mail.com",
        group: "Derivative",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Inactive",
        submitted: "06/10/2025",
        enabled: "06/10/2025"
    },
    {
        id: 1874,
        first: "Henry",
        last: "Stylers",
        email: "HenrySt98@mail.com",
        group: "Forward",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Active",
        submitted: "08/15/2025",
        enabled: "08/15/2025"
    },
    {
        id: 6061,
        first: "Fulgur",
        last: "Ovid",
        email: "FulgurOvid98@mail.com",
        group: "Forward",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Pending",
        submitted: "03/02/2025",
        enabled: "03/02/2025"
    },
    {
        id: 4328,
        first: "Sarah",
        last: "Chen",
        email: "SarahC98@mail.com",
        group: "Admin",
        division: "National",
        region: "CA",
        type: "Retail",
        status: "Active",
        submitted: "09/12/2025",
        enabled: "09/12/2025"
    },
    {
        id: 9987,
        first: "David",
        last: "Park",
        email: "DavidP12@mail.com",
        group: "Licensed",
        division: "National",
        region: "CA",
        type: "Retail",
        status: "Active",
        submitted: "06/12/2025",
        enabled: "06/12/2025"
    },
    {
        id: 7384,
        first: "Maria",
        last: "Santos",
        email: "MariaS12@mail.com",
        group: "Peculiar",
        division: "South",
        region: "TX",
        type: "Corporate",
        status: "Inactive",
        submitted: "09/15/2025",
        enabled: "09/15/2025"
    },
    {
        id: 8221,
        first: "Liam",
        last: "Turner",
        email: "LiamT21@mail.com",
        group: "Admin",
        division: "West",
        region: "WA",
        type: "Manager",
        status: "Active",
        submitted: "01/22/2026",
        enabled: "01/23/2026"
    },
    {
        id: 8843,
        first: "Priya",
        last: "Nair",
        email: "PriyaN21@mail.com",
        group: "Licensed",
        division: "South",
        region: "FL",
        type: "Recruiter",
        status: "Pending",
        submitted: "02/14/2026",
        enabled: "02/14/2026"
    },
    {
        id: 3345,
        first: "Omar",
        last: "Haddad",
        email: "OmarH55@mail.com",
        group: "Forward",
        division: "National",
        region: "TX",
        type: "Corporate",
        status: "Active",
        submitted: "04/09/2026",
        enabled: "04/10/2026"
    },
    {
        id: 2298,
        first: "Grace",
        last: "Kim",
        email: "GraceK77@mail.com",
        group: "Derivative",
        division: "West",
        region: "CA",
        type: "Manager",
        status: "Inactive",
        submitted: "05/30/2026",
        enabled: "05/30/2026"
    },
    {
        id: 7765,
        first: "Noah",
        last: "Reyes",
        email: "NoahR33@mail.com",
        group: "Admin",
        division: "Corporate",
        region: "NY",
        type: "Corporate",
        status: "Active",
        submitted: "07/01/2026",
        enabled: "07/02/2026"
    }
];

let nextId = 9000;
let page = 1;
let perPage = 10;
let editingId = null;
let deletingId = null;


function uniq(arr) {
    return [...new Set(arr)].sort();
}


function populateFilterOptions() {
    const rf = document.getElementById("regionFilter");
    const df = document.getElementById("divisionFilter");

    uniq(users.map(u => u.region)).forEach(r => {
        rf.insertAdjacentHTML(
            "beforeend",
            `<option value="${r}">${r}</option>`
        );
    });

    uniq(users.map(u => u.division)).forEach(d => {
        df.insertAdjacentHTML(
            "beforeend",
            `<option value="${d}">${d}</option>`
        );
    });
}


function getFiltered() {
    const q = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const st = document.getElementById("statusFilter").value;
    const rg = document.getElementById("regionFilter").value;
    const dv = document.getElementById("divisionFilter").value;

    return users.filter(u => {
        const hay = `${u.first} ${u.last} ${u.email}`.toLowerCase();

        if (q && !hay.includes(q)) {
            return false;
        }

        if (st && u.status !== st) {
            return false;
        }

        if (rg && u.region !== rg) {
            return false;
        }

        if (dv && u.division !== dv) {
            return false;
        }

        return true;
    });
}


function badge(status) {
    const cls =
        status === "Active"
            ? "badge-active"
            : status === "Inactive"
                ? "badge-inactive"
                : "badge-pending";

    return `
        <span class="badge-status ${cls}">
            ${status}
        </span>
    `;
}


function render() {
    const filtered = getFiltered();

    const totalPages = Math.max(
        1,
        Math.ceil(filtered.length / perPage)
    );

    if (page > totalPages) {
        page = totalPages;
    }

    const start = (page - 1) * perPage;

    const rows = filtered.slice(
        start,
        start + perPage
    );

    const tbody = document.getElementById("tableBody");

    tbody.innerHTML = rows.length
        ? rows
            .map(u => `
                <tr>
                    <td>${u.id}</td>
                    <td>${u.first}</td>
                    <td>${u.last}</td>
                    <td>${u.email}</td>
                    <td>${u.group}</td>
                    <td>${u.division}</td>
                    <td>${u.region}</td>
                    <td>${u.type}</td>
                    <td>${badge(u.status)}</td>
                    <td>${u.submitted}</td>
                    <td>${u.enabled}</td>

                    <td>
                        <button
                            class="act-btn"
                            onclick="openEdit(${u.id})"
                            title="Edit"
                        >
                            <i class="bi bi-pencil-square"></i>
                        </button>

                        <button
                            class="act-btn del"
                            onclick="openDelete(${u.id})"
                            title="Delete"
                        >
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            `)
            .join("")
        : `
            <tr>
                <td
                    colspan="12"
                    class="text-center text-muted py-4"
                >
                    No users match your search.
                </td>
            </tr>
        `;

    document.getElementById("resultCount").textContent =
        `${filtered.length} user${filtered.length !== 1 ? "s" : ""} found`;

    document.getElementById("pageInfo").textContent =
        filtered.length
            ? `Showing ${start + 1} to ${Math.min(
                start + perPage,
                filtered.length
            )} of ${filtered.length} entries`
            : "Showing 0 entries";


    const pag = document.getElementById("pagination");

    let html = `
        <li class="page-item ${page === 1 ? "disabled" : ""}">
            <a
                class="page-link"
                href="#"
                data-p="${page - 1}"
            >
                Previous
            </a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${i === page ? "active" : ""}">
                <a
                    class="page-link"
                    href="#"
                    data-p="${i}"
                >
                    ${i}
                </a>
            </li>
        `;
    }

    html += `
        <li class="page-item ${page === totalPages ? "disabled" : ""}">
            <a
                class="page-link"
                href="#"
                data-p="${page + 1}"
            >
                Next
            </a>
        </li>
    `;

    pag.innerHTML = html;

    pag.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();

            const p = +a.dataset.p;

            if (p >= 1 && p <= totalPages) {
                page = p;
                render();
            }
        });
    });
}


document
    .getElementById("searchInput")
    .addEventListener("input", () => {
        page = 1;
        render();
    });


[
    "statusFilter",
    "regionFilter",
    "divisionFilter"
].forEach(id => {
    document
        .getElementById(id)
        .addEventListener("change", () => {
            page = 1;
            render();
        });
});


document
    .getElementById("filterToggle")
    .addEventListener("click", () => {
        document
            .getElementById("filtersRow")
            .classList.toggle("show");
    });


document
    .getElementById("clearFilters")
    .addEventListener("click", () => {
        document.getElementById("searchInput").value = "";
        document.getElementById("statusFilter").value = "";
        document.getElementById("regionFilter").value = "";
        document.getElementById("divisionFilter").value = "";

        page = 1;
        render();
    });


function openEdit(id) {
    const u = users.find(x => x.id === id);

    editingId = id;

    document.getElementById("modalTitle").textContent =
        "Edit User";

    document.getElementById("fFirst").value = u.first;
    document.getElementById("fLast").value = u.last;
    document.getElementById("fEmail").value = u.email;
    document.getElementById("fGroup").value = u.group;
    document.getElementById("fDivision").value = u.division;
    document.getElementById("fRegion").value = u.region;
    document.getElementById("fType").value = u.type;
    document.getElementById("fStatus").value = u.status;

    new bootstrap.Modal(
        document.getElementById("userModal")
    ).show();
}


document
    .getElementById("addUserBtn")
    .addEventListener("click", () => {
        editingId = null;

        document.getElementById("modalTitle").textContent =
            "Add User";

        document.getElementById("userForm").reset();
    });


document
    .getElementById("userForm")
    .addEventListener("submit", e => {
        e.preventDefault();

        const data = {
            first: document.getElementById("fFirst").value.trim(),
            last: document.getElementById("fLast").value.trim(),
            email: document.getElementById("fEmail").value.trim(),
            group: document.getElementById("fGroup").value,
            division: document.getElementById("fDivision").value,
            region: document.getElementById("fRegion").value,
            type: document.getElementById("fType").value,
            status: document.getElementById("fStatus").value
        };

        const today = new Date().toLocaleDateString("en-US");

        if (editingId) {
            const u = users.find(x => x.id === editingId);

            Object.assign(u, data);

            showToast("User updated successfully");
        } else {
            users.unshift({
                id: nextId++,
                submitted: today,
                enabled: today,
                ...data
            });

            showToast("User added successfully");
        }

        bootstrap.Modal
            .getInstance(document.getElementById("userModal"))
            .hide();

        page = 1;
        render();
    });


function openDelete(id) {
    deletingId = id;

    const u = users.find(x => x.id === id);

    document.getElementById("deleteUserName").textContent =
        `${u.first} ${u.last} · ${u.email}`;

    new bootstrap.Modal(
        document.getElementById("deleteModal")
    ).show();
}


document
    .getElementById("confirmDelete")
    .addEventListener("click", () => {
        users = users.filter(u => u.id !== deletingId);

        bootstrap.Modal
            .getInstance(document.getElementById("deleteModal"))
            .hide();

        showToast("User deleted");

        render();
    });


function showToast(msg) {
    document.getElementById("toastBody").textContent = msg;

    new bootstrap.Toast(
        document.getElementById("toast"),
        {
            delay: 2200
        }
    ).show();
}


const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");


document
    .getElementById("sidebarToggle")
    .addEventListener("click", () => {
        sidebar.classList.toggle("open");
        backdrop.classList.toggle("show");
    });


backdrop.addEventListener("click", () => {
    sidebar.classList.remove("open");
    backdrop.classList.remove("show");
});


populateFilterOptions();
render();