{
  "action": "start",
  "object": "process",
  "status": "success",
  "category.generic": "Process",
  "category.high": "Availability Management",
  "category.low": "Control",
  "chain_id": "1984362269",
  "datafield1": "kubectl",
  "datafield2": "root",
  "datafield3": "0755",
  "datafield4": "/usr/bin/kubectl",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.10.7",
  "event_src.rule": "pt_siem_execve",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_start",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "execve",
  "numfield2": 0,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.process.cmdline": "kubectl -o json get ConfigMap management.av-engines --ignore-not-found",
  "object.process.cwd": "/",
  "object.process.fullpath": "/usr/bin/kubectl",
  "object.process.id": "37208",
  "object.process.meta": "/usr/local/bin/python /usr/local/bin/ptms updater run",
  "object.process.name": "kubectl",
  "object.process.parent.id": "11669",
  "object.process.path": "/usr/bin/",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "4294967295",
  "time": "2022-05-05T17:31:53.000Z"
}