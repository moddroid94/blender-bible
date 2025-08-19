---
name: Add Tutorials
about: Add some tutorials to the list
title: ''
labels: ''
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

- type: textarea
    id: what-happened
    attributes:
      label: tutorials JSON list
      description: Copy here the json list of tutorials formatted as per docs
      placeholder: {...},{...},{...}
      value: 
    validations:
      required: true

- type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: Confirm that the syntax is correct?
      options:
        - label: I confirm that I've provided useful content and not AI slop
     validations:
        required: true
