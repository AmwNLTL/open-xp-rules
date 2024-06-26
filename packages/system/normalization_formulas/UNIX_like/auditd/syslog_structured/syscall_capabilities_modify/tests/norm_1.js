{
  "subject": "process",
  "action": "elevate",
  "object": "process",
  "status": "success",
  "category.generic": "Process",
  "category.high": "Users And Rights Management",
  "category.low": "Manipulation",
  "chain_id": "9490",
  "datafield1": "setcap",
  "event_src.category": "Operating system",
  "event_src.hostname": "pewpew-pc",
  "event_src.rule": "pt_siem_api_caps",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_capabilities_modify",
  "importance": "low",
  "logon_service": "pts/0",
  "msgid": "capset",
  "object.account.group": "0",
  "object.account.id": "0",
  "object.new_value": "0000003fffffffff",
  "object.process.id": "4550",
  "object.property": "effective_capabilities",
  "object.state": "capabilities_change",
  "subject.account.id": "1000",
  "subject.account.privileges": "0",
  "subject.account.session_id": "61",
  "subject.process.fullpath": "/sbin/setcap",
  "subject.process.id": "4550",
  "subject.process.meta": "setcap CAP_NET_RAW=+eip /usr/bin/date",
  "subject.process.name": "setcap",
  "subject.process.parent.id": "4336",
  "subject.process.path": "/sbin/",
  "time": "2019-05-18T20:55:43.000Z"
}